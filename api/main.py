import lodestone
from fastapi import FastAPI
import os
import time
import json
import sys
import uvicorn
import lodestone
import structlog
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from rich.console import Console
from rich import print
from rich.layout import Layout
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
import threading
import random
import math
import click
from fastapi import FastAPI
from slowapi.errors import RateLimitExceeded
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
import socks 
import requests
from fastapimain import app, limiter
from events import main_events
from ballyregan import ProxyFetcher
from ballyregan.models import Protocols, Anonymities


logger = structlog.get_logger()
fetcher = ProxyFetcher(debug=True)
console = Console()
layout = Layout()


global in_queue
global bots
in_queue = True
bots = []

def create_bot_with_options(host, port, username, version, viewer):
    if len(bots) == 1:
        def proxy(client):
            # proxy = fetcher.get(
            #     limit=1,
            #     protocols=[Protocols.SOCKS5, Protocols.SOCKS4],
            # )
            # print(fetcher.get_one(protocols=[Protocols.SOCKS5, Protocols.SOCKS4]))
            # print(proxy[0])
            print("Connecting to proxy...")
            sock = socks.socksocket()
            # if "http" in str(proxy[0].protocol):
            #     sock.set_proxy(socks.HTTP, proxy[0].ip, proxy[0].port)
            # if "SOCKS5" in str(proxy[0].protocol):
            #     sock.set_proxy(socks.SOCKS5, proxy[0].ip, proxy[0].port)
            # if "SOCKS4" in str(proxy[0].protocol):
            
            sock.set_proxy(socks.SOCKS5, "38.154.227.167", 5868, username="mqkbkmyt", password="chamsxo84evb")
            print("Connected to proxy")
            sock.connect((host, port))
            print("Connected to server")
            client.setSocket(sock)
            client.emit('connect')
        
        temp_bot = lodestone.createBot(
            host=host,
            port=port,
            username=username,
            version=version,
            ls_skip_checks=True,
            checkTimeoutInterval=100000,
            ls_disable_viewer=viewer,
            ls_enable_chat_logging=True,
        )
        print(f"Created bot {temp_bot.bot.username}")
        bots.append(temp_bot)
    else:
        temp_bot = lodestone.createBot(
            host=host,
            port=port,
            username=username,
            version=version,
            ls_skip_checks=True,
            checkTimeoutInterval=100000,
            ls_disable_viewer=viewer,
            ls_enable_chat_logging=True,
        )
        print(f"Created bot {temp_bot.bot.username}")
        bots.append(temp_bot)
        main_events(bots[0])

# API Functions

@app.get("/api/bot/status")
@limiter.limit("20/minute")
async def status(request: Request):
    print(bots)
    try:
        position = bots[1].bot.tablist.header.json.valueOf()["extra"][2]['extra'][0]['text'].replace("\n", "")
        eta = bots[1].bot.tablist.header.json.valueOf()["extra"][3]['extra'][0]['text'].replace("\n", "")
        if not in_queue:
            position = None
            eta = None
            
        data = {
            "position": position,
            "eta": eta,
            "username": bots[1].bot.username,
        }
        data = jsonable_encoder(data)
        return JSONResponse(content=data)
    except:
        return JSONResponse(content={"position": None, "eta": None})


@app.get("/api/queue")
@limiter.limit("50/minute")
async def status(request: Request):
    try:
        if not in_queue:
            position = None
            eta = None
        global queue_status
        bots[0].chat("/queue")
        # bot.bot.awaitMessage('<flatbot> hello world')
        once_func = bots[0]
        @once_func.once("messagestr")
        def queue(this, message:str, messagePosition, jsonMsg, sender, *args):
            global queue_status
            queue_status = message.replace("\n", "").replace("2b2t queue lengths: normal: ", "").replace(" priority: ", "").split(",")
            
            
        
        data = {
            "normal": queue_status[0],
            "priority": queue_status[1],
        }
        data = jsonable_encoder(data)
        return JSONResponse(content=data)
    except:
        data = {
            "normal": None,
            "priority": None,
        }
        data = jsonable_encoder(data)
        return JSONResponse(content=data)


@app.get("/api/players")
@limiter.limit("20/minute")
async def status(request: Request):
    if not in_queue:
        players = {}
        for player in bots[1].bot.players.valueOf():
            try:
                x = bots[1].bot.players[player].entity.position.x
            except: 
                x = None

            try:
                y = bots[1].bot.players[player].entity.position.y
            except:
                y = None

            try:
                z = bots[1].bot.players[player].entity.position.z 
            except:
                z = None
                
            try:
                username = bots[1].bot.players[player].username
            except:
                username = None

            try:    
                ping = bots[1].bot.players[player].ping
            except:
                ping = None

            try:
                uuid = bots[1].bot.players[player].uuid
            except:
                uuid = None

            try:
                skin = bots[1].bot.players[player].skinData.url
            except:
                skin = None
            

            players[player] = {"username": username,  
                            "ping": ping,
                            "uuid": uuid,
                            "skin": skin,   
                            "position": {"x": x, "y": y, "z": z},
                            }
        return JSONResponse(content=players)
    return JSONResponse(content=[])

@app.get("/api/lookup/{username}")
@limiter.limit("20/minute")
async def lookup(request: Request, username:str):
    if not in_queue:
        players = {}
       
        try:
            x = bots[1].bot.players[username].entity.position.x
        except: 
            x = None

        try:
            y = bots[1].bot.players[username].entity.position.y
        except:
            y = None

        try:
            z = bots[1].bot.players[username].entity.position.z 
        except:
            z = None
            
        try:
            username = bots[1].bot.players[username].username
        except:
            username = None

        try:    
            ping = bots[1].bot.players[username].ping
        except:
            ping = None

        try:
            uuid = bots[1].bot.players[username].uuid
        except:
            uuid = None

        try:
            skin = bots[1].bot.players[username].skinData.url
        except:
            skin = None
        
        try:
            chat = bots[1].chat_history(username=username)
        except:
            chat = []

        players = {"username": username,  
                        "ping": ping,
                        "uuid": uuid,
                        "skin": skin,   
                        "position": {"x": x, "y": y, "z": z},
                        "chat": chat
                        }
        return JSONResponse(content=players)
    return JSONResponse(content=[])


if "__main__" == __name__:
    print("Starting bots...")
    print("Starting bot 1...")
    bot1 = threading.Thread(target=create_bot_with_options, daemon=True, args=["2b2t.org", 25565, "CustomCapes", "1.19", True])
    print("Starting bot 2...")
    bot2 = threading.Thread(target=create_bot_with_options, daemon=True, args=["2b2t.org", 25565, "Douweatrijder", "1.12.2", True])
    bot1.start()
    time.sleep(10)
    bot2.start()
    print("Starting API...")
    uvicorn.run(app, port=5000)
    
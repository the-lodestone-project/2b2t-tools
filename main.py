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

logger = structlog.get_logger()
console = Console()
layout = Layout()
global in_queue
global bot

# Create a FastAPI instance
limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)




# Bot Functions


@click.command()
@click.option("--username", "-u", help="Run lodestone tests", required=True, type=str)
@click.option("--host", "-h", default="2b2t.org", help="Run lodestone tests", required=True, type=str, show_default=True)
@click.option("--port", "-p", default=25565, help="Run lodestone tests", required=False, type=int, show_default=True)
@click.option("--version", "-v", default="1.19", help="Run lodestone tests", required=False, show_default=True, type=click.Choice(["1.8.8", "1.9" "15w40b", "1.9.1-pre2", "1.9.2", "1.9.4", "1.10", "16w20a", "1.10-pre1", "1.10", "1.10.1", "1.10.2", "1.11", "16w35a", "1.11", "1.11.2", "1.12", "17w15a", "17w18b", "1.12-pre4", "1.12", "1.12.1", "1.12.2", "1.13", "17w50a", "1.13", "1.13.1", "1.13.2-pre1", "1.13.2-pre2", "1.13.2", "1.14", "1.14", "1.14.1", "1.14.3", "1.14.4", "1.15", "1.15", "1.15.1", "1.15.2", "1.16", "20w13b", "20w14a", "1.16-rc1", "1.16", "1.16.1", "1.16.2", "1.16.3", "1.16.4", "1.17", "21w07a", "1.17", "1.17.1", "1.18", "1.18", "1.18.1", "1.18.2", "1.19", "1.19", "1.19.1", "1.19.2", "1.19.3", "1.19.4", "1.20", "1.20.1"], case_sensitive=False))
# @click.option("--debug", "-d", default=False, help="Run lodestone tests", required=False, type=bool, show_default=True)
@click.option("--viewer", default=True, help="Run lodestone tests", required=False, type=bool, show_default=True)
def create_bot_with_options(host, port, username, version, viewer):
    global bot
    bot = lodestone.createBot(
        host=host,
        port=port,
        username=username,
        version=version,
        ls_skip_checks=True,
        checkTimeoutInterval=100000,
        ls_disable_viewer=viewer,
        ls_enable_chat_logging=True,
    )
    
    
    def join_event():
        global in_queue
        in_queue = True
        while in_queue:
            if bot.logged_in:
                try:
                    players = len(bot.bot.players.valueOf())
                    if players > 1:
                        bot.emit("2b2t_join", None)
                        in_queue = False
                except Exception as e:
                    print(e)
                    pass
                time.sleep(10)
            
    event1 = threading.Thread(target=join_event, daemon=True)
    event1.start()

    @bot.once("2b2t_join")
    def start(*args):
        def anti_afk_loop():
            while True:
                try:
                    yaw = 2 * random.random() * math.pi - (0.5 * math.pi)
                    pitch = random.random() * math.pi - (0.5 * math.pi)
                    bot.bot.look(yaw, pitch, False)
                    time.sleep(3)
                    bot.set_control_state('jump', True)
                    if bot.entity.isInWater:
                        bot.set_control_state('jump', False)
                    time.sleep(3)
                    bot.set_control_state('jump', False)
                    time.sleep(2)
                    arm = 'right' if random.random() < 0.5 else 'left'
                    bot.bot.swingArm({'hand':arm})
                except:
                    break
        event2 = threading.Thread(target=anti_afk_loop, daemon=True)
        event2.start()
        print("Sucsecfuly joined 2b2t. Starting anti AFK.")


    @bot.on("end")
    def rejoin(*args):
        threading.Thread(target=create_bot_with_options, daemon=True).start()

# API Functions


@app.get("/api/bot/status")
@limiter.limit("20/minute")
async def status(request: Request):
    try:
        position = bot.bot.tablist.header.json.valueOf()["extra"][2]['extra'][0]['text'].replace("\n", "")
        eta = bot.bot.tablist.header.json.valueOf()["extra"][3]['extra'][0]['text'].replace("\n", "")
        if not in_queue:
            position = None
            eta = None
            
        data = {
            "position": position,
            "eta": eta,
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
        bot.chat("/queue")
        # bot.bot.awaitMessage('<flatbot> hello world')
        @bot.once("messagestr")
        def queue(this, message, messagePosition, jsonMsg, sender, *args):
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
        for player in bot.bot.players.valueOf():
            try:
                x = bot.bot.players[player].entity.position.x
            except: 
                x = None

            try:
                y = bot.bot.players[player].entity.position.y
            except:
                y = None

            try:
                z = bot.bot.players[player].entity.position.z 
            except:
                z = None
                
            try:
                username = bot.bot.players[player].username
            except:
                username = None

            try:    
                ping = bot.bot.players[player].ping
            except:
                ping = None

            try:
                uuid = bot.bot.players[player].uuid
            except:
                uuid = None

            try:
                skin = bot.bot.players[player].skinData.url
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
            x = bot.bot.players[username].entity.position.x
        except: 
            x = None

        try:
            y = bot.bot.players[username].entity.position.y
        except:
            y = None

        try:
            z = bot.bot.players[username].entity.position.z 
        except:
            z = None
            
        try:
            username = bot.bot.players[username].username
        except:
            username = None

        try:    
            ping = bot.bot.players[username].ping
        except:
            ping = None

        try:
            uuid = bot.bot.players[username].uuid
        except:
            uuid = None

        try:
            skin = bot.bot.players[username].skinData.url
        except:
            skin = None
        
        try:
            chat = bot.chat_history(username=username)
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
    threading.Thread(target=create_bot_with_options, daemon=True).start()
    print("Starting API...")
    uvicorn.run(app, port=5000)
    
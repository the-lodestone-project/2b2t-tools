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
import re
import click
from fastapi import FastAPI
from slowapi.errors import RateLimitExceeded
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
import socks 
import requests

# import the database manager
import database

# Create a Logger
logger = structlog.get_logger()
console = Console()
layout = Layout()


# Create a FastAPI instance with rate limiting
limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)


# Create a global variable for the queue and bots status
global in_queue
global bots
in_queue = True
bots = []


# Debug mode (use 5b5t.org for testing)
DEBUG = True
DEBUG_SERVER = "5b5t.org"
DEBUG_VERSION = "1.12.2"


# Function to wait for the queue
def wait_for_queue(bot: lodestone.Bot):
    print("Waiting for the queue to finish...")
    global in_queue
    in_queue = True
    while in_queue:
        # check if the bot is logged in
        if bot.logged_in:
            try:
                players = len(bot.bot.players.valueOf())
                # check if there are more then 2 players
                if players > 2:
                    # emit the event
                    time.sleep(5)
                    bot.emit("queue_finished", None)
                    in_queue = False
            except Exception as e:
                print(e)
                pass
            # wait 10 seconds before checking again
            time.sleep(10)




# Function to create a bot
def create_bot_with_options(host, port, username, version, viewer, number=None):
    if len(bots) == 0:
        # Create a bot that will sit in the queue and get the queue size and status
        temp_bot = lodestone.createBot(
            host=host,
            port=port,
            username=username,
            version=version,
            ls_skip_checks=True,
            checkTimeoutInterval=30*1000,
            ls_disable_viewer=viewer,
            ls_enable_chat_logging=False,
        )
        bots.append(temp_bot)
    elif len(bots) == 1 or number == 1:
        # Create a bot that will wait for the queue and log 2b2t chat and events
        temp_bot = lodestone.createBot(
            host=host,
            port=port,
            username=username,
            version=version,
            ls_skip_checks=True,
            checkTimeoutInterval=30*1000,
            ls_disable_viewer=viewer,
            ls_enable_chat_logging=False,
        )
        
        temp_bot.log(f"{temp_bot.bot.username} is the second bot. Waiting for the queue to finish.", warning=True)

        bots.append(temp_bot)
        
        # Wait to pass the queue and start the anti afk
        @temp_bot.on("queue_finished")
        def queue_(*args):
            
            temp_bot.log(f"{temp_bot.bot.username} is now in the server. Starting the anti afk and logging events to database", warning=True)
            
            # Function to start the anti afk
            def anti_afk_loop():
                while True:
                    try:
                        yaw = random.randint(0, 360)
                        temp_bot.bot.look(yaw, 0, False)
                        time.sleep(2)
                        temp_bot.bot.swingArm({'hand':"right"})
                    except Exception as e:
                        print(e)
                        pass
                    
            loop = threading.Thread(target=anti_afk_loop, daemon=True)
            loop.start()
            
            
            # Events to log the chat and other events to the database
            
            @temp_bot.on("chat")
            def log_chat(this, sender:str, message:str, *args):
                try:
                    message = str(message).replace("\n\n","")
                    database.add_player_chat(sender, message)
                except Exception as e:
                    print(e)
                    pass
            
            @temp_bot.on("entityMoved")
            def log_coords(this, entity):
                try:
                    if entity.type == "player":
                        print(entity.username, entity.position)
                        position = f"{int(entity.position.x)} {int(entity.position.y)} {int(entity.position.z)}"
                        database.add_player_location(entity.username, position)
                except Exception as e:
                    print(e)
                    pass
            
            @temp_bot.on("playerJoined")
            def player_join(this, player):
                try:
                    username = re.search(r"'username': '(\w+)'", str(player)).group(1)
                    database.add_player_join(username)
                except Exception as e:
                    print(e)
                    pass
            
            @temp_bot.on("playerLeft")
            def player_leave(this, player):
                try:
                    username = re.search(r"'username': '(\w+)'", str(player)).group(1)
                    database.add_player_leave(username)
                except Exception as e:
                    print(e)
                    pass
                
                
        # Start the function to wait for the queue
        queue_waiter = threading.Thread(target=wait_for_queue, daemon=True, args=[temp_bot])
        queue_waiter.start()
        
        
        
        # TODO: Rejoin when the bot disconnects something like this:
        
        # @temp_bot.on("end")
        # def rejoin(*args):
        #     threading.Thread(target=create_bot_with_options, daemon=True).start()
        #     print("Bot disconnected. Reconnecting is not implemented yet.")

















# Create a FastAPI routs with rate limiting
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
            chat = database.get_player_chat(username)
        except Exception as e:
            print(e)
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
    with console.status("[bold green]Starting the API...") as current:
        if DEBUG:
            logger.warning("Starting in debug mode")
            bot1 = threading.Thread(target=create_bot_with_options, daemon=True, args=[DEBUG_SERVER, 25565, "CustomCapes", "1.12.2", True])
            bot2 = threading.Thread(target=create_bot_with_options, daemon=True, args=[DEBUG_SERVER, 25565, "Douweatrijder", "1.12.2", True])
        else:
            bot1 = threading.Thread(target=create_bot_with_options, daemon=True, args=["2b2t.org", 25565, "CustomCapes", "1.12.2", True])
            bot2 = threading.Thread(target=create_bot_with_options, daemon=True, args=["2b2t.org", 25565, "Douweatrijder", "1.12.2", True])
        current.update("[bold white]Starting bot 1...\n")
        bot1.start()
        current.update(f"[bold green]✔️[bold white] Bot 1 started!\n")
        for i in range(0, 11):
            time.sleep(1)
            current.update(f"[bold white]Starting bot 2 in {10 - i} seconds...\n")
        current.update("[bold white]Starting bot 2...\n")
        bot2.start()
        current.update(f"[bold green]✔️[bold white] Bot 2 started!\n")
        time.sleep(2)
        current.update(f"[bold green]✔️[bold white] API is up and running!\n")
        time.sleep(2)
    uvicorn.run(app, port=5000, log_level="critical")
    
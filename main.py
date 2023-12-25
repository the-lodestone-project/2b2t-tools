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

logger = structlog.get_logger()
console = Console()
layout = Layout()

# Create a FastAPI instance
app = FastAPI()

# Create a bot instance
bot = lodestone.createBot(
    host="2b2t.org",
    port=25565,
    username="CustomCapes",
    version="1.19",
    ls_skip_checks=True,
    checkTimeoutInterval=1000000000
)
global in_queue



def join_event():
    global in_queue
    in_queue = True
    while in_queue:
        if bot.logged_in:
            try:
                position = int(bot.bot.tablist.header.json.valueOf()["extra"][2]['extra'][0]['text'].replace("\n", ""))
                if position <= 2:
                    bot.emit("2b2t_join")
                    in_queue = False
            except:
                pass
            time.sleep(10)
        
threading.Thread(target=join_event, daemon=True).start()



@bot.once("2b2t_join")
def start():
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
    threading.Thread(target=anti_afk_loop, daemon=True).start()
    print("Sucsecfuly joined 2b2t. Starting anti AFK.")



@app.get("/api/queue")
async def status():
    if not in_queue:
        return JSONResponse(content={'position': 0, 'eta': 0})
    data = {
        "position": bot.bot.tablist.header.json.valueOf()["extra"][2]['extra'][0]['text'].replace("\n", ""),
        "eta": bot.bot.tablist.header.json.valueOf()["extra"][3]['extra'][0]['text'].replace("\n", ""),
    }
    data = jsonable_encoder(data)
    return JSONResponse(content=data)


@app.get("/api/players")
async def status():
    if not in_queue:
        return JSONResponse(content=bot.bot.players.valueOf())
    return JSONResponse(content=bot.bot.players.valueOf())

@app.get("/api/{username}")
async def status(username:str):
    if not in_queue:
        return JSONResponse(content=bot.bot.players[username].valueOf())
    return JSONResponse(content={})



uvicorn.run(app, port=5000)
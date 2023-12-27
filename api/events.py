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

def main_events(bot: lodestone.Bot):
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
        # threading.Thread(target=create_bot_with_options, daemon=True).start()
        print("Bot disconnected. Reconnecting is not implemented yet.")
import database
import lodestone
from fastapi import FastAPI
import time
import uvicorn
import lodestone
import structlog
import inspect
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from rich.console import Console
from rich import print
from rich.layout import Layout
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
import threading
import random
import re
from fastapi import FastAPI
from slowapi.errors import RateLimitExceeded
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from rich.traceback import install
from mcstatus import JavaServer
from fastapi.middleware.cors import CORSMiddleware
install()

# import the database manager

# Create a Logger
logger = structlog.get_logger()
console = Console()
layout = Layout()


# Create a FastAPI instance with rate limiting
limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create a global variable for the queue and bots status
global in_queue
global bots
in_queue = True
bots = []


# Debug mode (use 5b5t.org for testing)
DEBUG = False
DEBUG_SERVER = "5b5t.org"
DEBUG_VERSION = "1.12.2"


# Function to wait for the queue
def wait_for_queue(bot: lodestone.Bot, current):
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


# Function to wait for the queue
def wait_for_queue_then_rejoin(bot: lodestone.Bot):
    
    global in_queue
    in_queue = True
    while in_queue:
        # check if the bot is logged in
        if bot.logged_in:
            try:
                position = bot.bot.tablist.header.json.valueOf(
                )["extra"][2]['extra'][0]['text'].replace("\n", "")
                
                # check if there are more then 2 players
                if position == 10:
                    time.sleep(5)
                    bot.stop()
                    bot1 = threading.Thread(target=create_bot_with_options, daemon=True, args=[
                                            "2b2t.org", 25565, "CustomCapes", "1.12.2", True, 0])
                    bot1.start()
            except Exception as e:
                print(e)
                pass
            # wait 10 seconds before checking again
            time.sleep(10)


# Function to create a bot
def create_bot_with_options(host, port, username, version, viewer, current, number=None,):
    if len(bots) == 0 or number == 0:
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

        # @temp_bot.on("end")
        # def rejoin(*args):
        #     temp_bot.stop()
        #     bot1 = threading.Thread(target=create_bot_with_options, daemon=True, args=["2b2t.org", 25565, "CustomCapes", "1.12.2", True, 0])
        #     bot1.start()
        #     print("Bot1 disconnected. Reconnecting...")

        # Start the function to wait for the queue and rejoin when the bot reaches the end of the queue
        # queue_waiter = threading.Thread(target=wait_for_queue_then_rejoin, daemon=True, args=[temp_bot])
        # queue_waiter.start()

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

        temp_bot.log(
            f"{temp_bot.bot.username} is the second bot. Waiting for the queue to finish.", warning=True)

        bots.append(temp_bot)

        # Wait to pass the queue and start the anti afk
        @temp_bot.on("queue_finished")
        def queue_(*args):

            temp_bot.log(
                f"{temp_bot.bot.username} is now in the server. Starting the anti afk and logging events to database", warning=True)

            # Function to start the anti afk
            def anti_afk_loop():
                while True:
                    try:
                        yaw = random.randint(0, 360)
                        temp_bot.bot.look(yaw, 0, False)
                        time.sleep(2)
                        temp_bot.bot.swingArm({'hand': "right"})
                    except Exception as e:
                        print(e)
                        pass

            loop = threading.Thread(target=anti_afk_loop, daemon=True)
            loop.start()

            # Events to log the chat and other events to the database

            @temp_bot.on("chat")
            def log_chat(this, sender: str, message: str, *args):
                try:
                    message = str(message).replace("\n\n", "")
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
                    username = re.search(
                        r"'username': '(\w+)'", str(player)).group(1)
                    database.add_player_join(username)
                except Exception as e:
                    print(e)
                    pass

            @temp_bot.on("playerLeft")
            def player_leave(this, player):
                try:
                    username = re.search(
                        r"'username': '(\w+)'", str(player)).group(1)
                    database.add_player_leave(username)
                except Exception as e:
                    print(e)
                    pass

        # Start the function to wait for the queue
        queue_waiter = threading.Thread(
            target=wait_for_queue, daemon=True, args=[temp_bot, current])
        queue_waiter.start()

        # TODO: Rejoin when the bot disconnects something like this:

        # @temp_bot.on("end")
        # def rejoin(*args):
        #     temp_bot.stop()
        #     bot2 = threading.Thread(target=create_bot_with_options, daemon=True, args=["2b2t.org", 25565, "Douweatrijder", "1.12.2", True, 1])
        #     bot2.start()
        #     print("Bot2 disconnected. Reconnecting...")


# Create a FastAPI routs with rate limiting
@app.get("/api/bot/status")
@limiter.limit("20/minute")
async def status(request: Request):
    try:
        position = bots[1].bot.tablist.header.json.valueOf(
        )["extra"][2]['extra'][0]['text'].replace("\n", "")
        eta = bots[1].bot.tablist.header.json.valueOf(
        )["extra"][3]['extra'][0]['text'].replace("\n", "")
        if not in_queue:
            position = None
            eta = None

        data = {"result": {
            "position": position,
            "eta": eta,
            "username": bots[1].bot.username,
        },
            "status": 200,
            "error": None,
        }
        data = jsonable_encoder(data)
        return JSONResponse(content=data)
    except:
        data = {"result": {
            "position": None,
            "eta": None,
            "username": bots[1].bot.username,
        },
            "status": 200,
            "error": None,
        }
        return JSONResponse(content=data)


@app.get("/api/random")
@limiter.limit("100/minute")
async def status(request: Request):
    try:
        message = database.get_random_message()

        data = {"result": {
            "message": message,
        },
            "status": 200,
            "error": None,
        }
        data = jsonable_encoder(data)
        return JSONResponse(content=data)
    except:
        return JSONResponse(content={"message": None})


@app.get("/api/stats")
@limiter.limit("100/minute")
async def status(request: Request):
    try:
        total_messages = database.get_total_chat_messages()
        total_players = database.get_total_players()

        data = {"result": {
            "total_messages": total_messages,
            "total_players": total_players,
        },
            "status": 200,
            "error": None,
        }
        data = jsonable_encoder(data)
        return JSONResponse(content=data)
    except:
        data = {"result": {
            None
        },
            "status": 503,
            "error": None,
        }
        return JSONResponse(content=data)


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
        def queue(this, message: str, messagePosition, jsonMsg, sender, *args):
            global queue_status
            queue_status = message.replace("\n", "").replace(
                "2b2t queue lengths: normal: ", "").replace(" priority: ", "").split(",")

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
@limiter.limit("35/minute")
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
async def lookup(request: Request, username: str):
    if not in_queue:
        if username not in bots[1].bot.players:
            return JSONResponse(content={"error": "Player not found"})

        try:
            username = bots[1].bot.players[username].username
        except Exception as e:
            print(e)
            username = None

        try:
            ping = bots[1].bot.players[username].ping
        except Exception as e:
            print(e)
            ping = None

        try:
            uuid = bots[1].bot.players[username].uuid
        except Exception as e:
            print(e)
            uuid = None

        try:
            skin = bots[1].bot.players[username].skinData.url
        except Exception as e:
            print(e)
            skin = None

        try:
            chat = database.get_player_chat(username)
        except Exception as e:
            print(e)
            chat = []

        try:
            play_time = database.get_player_play_time(username)
        except Exception as e:
            print(e)
            play_time = None

        try:
            temp_ = database.get_player_location(username)
            if temp_ != None:
                x, y, z = temp_[1].split(" ")
                x = int(x)
                y = int(y)
                z = int(z)
                print(x, y, z)
        except Exception as e:
            print(e)
            x, y, z = None

        try:
            first_joined = database.get_player_first_join(username)[1]
        except Exception as e:
            print(e)
            first_joined = None

        try:
            last_joined = database.get_player_last_join(username)[1]
        except Exception as e:
            print(e)
            last_joined = None

        try:
            join_count = database.get_player_join_count(username)
        except Exception as e:
            print(e)
            join_count = None

        players = {"result": {
            "username": username,
            "ping": ping,
            "uuid": uuid,
            "skin": skin,
            "position": {"x": x, "y": y, "z": z},
            "chat": chat,
            "play_time": play_time,
            "first_joined": first_joined,
            "last_joined": last_joined,
            "join_count": join_count,
        },
            "status": 200,
            "error": None,
        }
        return JSONResponse(content=players)
    else:
        players = {"result": {
            None
        },
            "status": 503,
            "error": "Bot is in queue",
        }
        return JSONResponse(content=players)


if "__main__" == __name__:
    with console.status("[bold green]Starting the API...") as current:
        if DEBUG:
            logger.warning("Starting in debug mode")
            bot1 = threading.Thread(target=create_bot_with_options, daemon=True, args=[
                                    DEBUG_SERVER, 25565, "CustomCapes", "1.12.2", True, current])
            bot2 = threading.Thread(target=create_bot_with_options, daemon=True, args=[
                                    DEBUG_SERVER, 25565, "Douweatrijder", "1.12.2", True, current])
        else:
            bot1 = threading.Thread(target=create_bot_with_options, daemon=True, args=[
                                    "2b2t.org", 25565, "CustomCapes", "1.12.2", True, current])
            bot2 = threading.Thread(target=create_bot_with_options, daemon=True, args=[
                                    "2b2t.org", 25565, "Douweatrijder", "1.12.2", True, current])
        current.update("[bold white]Starting bots...\n")
        bot1.start()
        # current.update(f"[bold green]✔️[bold white] Bot 1 started!\n")
        for i in range(0, 11):
            time.sleep(1)
            current.update(
                f"[bold white]Starting bot 2 in {10 - i} seconds...\n")
        bot2.start()
    uvicorn.run(app, port=5000, log_level="critical")

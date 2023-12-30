<file-attachment-contents filename="README.md">

<h1 align="center">
  <br>
  <a href="https://github.com/the-lodestone-project/2b2t-tools/"><img src="https://github.com/the-lodestone-project/2b2t-tools/blob/main/minecraft_title.png?raw=true" alt="2b2t tools" width="600"></a>
  <br>
</h1>

<h4 align="center">🤖 Follow player movements, monitor chat messages and mutch more! <img src="https://minecraft.wiki/images/Invicon_Recovery_Compass.gif?c2f29"></h4>

<p align="center">
    <img alt="Node version" src="https://img.shields.io/static/v1?label=node&message=%20%3E=18.0.0&logo=node.js&color=2334D058" />
      <a href="https://python.org/"><img src="https://img.shields.io/badge/Python-FFD43B?logo=python&logoColor=blue" alt="Python"></a>
  <a href="https://github.com/reworkd/AgentGPT/blob/master/docs/README.zh-HANS.md"><img src="https://img.shields.io/badge/JavaScript-323330?logo=minecraft&logoColor=F7DF1E" alt="javascript"></a>
  <a href="soon!"><img src="https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white" alt="Hungarian"></a>
</p>

<!-- ![screenshot](https://raw.githubusercontent.com/SilkePilon/youdotcom/main/assets/images/YouDotCom.jpg) -->

## About <img src="https://github.com/the-lodestone-project/Lodestone/tree/main/assets/items/upscaled/writable_book.png" width="25" height="25">

Have you ever wondered what really goes on in the infamous and chaotic world of 2b2t, Minecraft's oldest anarchy server? Ever wished you could get rare insights into the players, places, events, and rich history that have defined this boundary-pushing community over the past decade? Our new 2b2t API gives you access to data and tools to satisfy your curiosity and enhance your experience with this one-of-a-kind server.


## Features

* <img src="https://minecraft.wiki/images/ItemSprite_compass.png?2364d"> Log player join's and leave's
* <img src="https://minecraft.wiki/images/EnvSprite_sprint.png?e9341"> Log player movement
* <img src="https://minecraft.wiki/images/EffectSprite_strength-revision-1.png?8da27"> Log kills
* <img src="https://minecraft.wiki/images/ItemSprite_oak-sign.png?e1d26"> Log chat messages
* <img src="https://minecraft.wiki/images/EffectSprite_particle-speed.png?0ed64"> SQL database

## Getting Started <img src="https://github.com/the-lodestone-project/Lodestone/tree/main/assets/items/upscaled/iron_sword.png" width="20" height="20">

> [!IMPORTANT]
> project lodestone is still in development and has some bugs.

All instalation instructons and documentation can be found [here](https://lodestone-documentation.vercel.app/ "docs") <img src="https://github.com/the-lodestone-project/Lodestone/tree/main/assets/items/upscaled/arrow.png" width="25" height="25"> but here is the general idea.

#### Installation and Setup
The first step is to install the Lodestone package using pip. It’s recommended to create a virtual environment first before installing:
```bash
python3 -m venv env
source env/bin/activate
pip install lodestone
```
With Lodestone installed, create a bot.py file to initialize your bot. This is where you’ll configure your bot’s username, authentication method, and other options:
```python
import lodestone
bot = lodestone.createBot(
  host='localhost',
  port=25565,  # set this to your own LAN port
  username='MyAwesomeBot',
  auth='microsoft' 
)
```
In this example, we’re connecting to a local Minecraft server on localhost and using Microsoft authentication.

##### Running and Logging In
With your bot created, run it using:
```bash
python bot.py
```
The first time you run your bot, Lodestone will prompt you to log in using the authentication method you configured. Follow the login prompts to authenticate your bot and connect it to the Minecraft server.
Lodestone provides multiple authentication options including Microsoft and Offline modes. See the docs for details.


</details>

## Using the API

The 2b2t tools provides the following APIs to get bot and server info.

#### Bot Status

```
GET /api/bot/status
```

Get the current status of the monitoring bot.

**Response**

```json
{
  "position": "123", 
  "eta": "4h 10m",
  "username": "MyBot"
}
```

- `position`: Queue position if in queue, else `null`
- `eta`: Estimated time to join if in queue, else `null` 
- `username`: Bot's Minecraft username

#### Random Chat Message 

```
GET /api/random 
```

Get a random chat message from the database.

**Response**

```
"Goodbye cruel world" 
```

Returns a random player chat message string.

#### Server Stats

```
GET /api/stats
```  

Get stats on chat messages and players seen.

**Response**

```json
{
  "total_messages": 473293,
  "total_players": 39482  
}
```

- `total_messages`: Total chat messages logged 
- `total_players`: Total unique players logged

#### Player Lookup

```
GET /api/lookup/{username}
```

Get detailed info on a specific player.

Path parameter:

- `username`: The Minecraft username 

**Response**

```json
{
  "username": "notch",
  "uuid": "069a79f4-44e9-4726-a5be-fca90e38aaf5",
  "first_join": "2009-05-17T12:33:14.083Z",
  
  // other player stats...
}
```

#### Queue Lengths

```
GET /api/queue  
```

Get the 2b2t queue lengths.

**Response** 

```
{
  "normal": 234,
  "priority": 22 
}
``` 

- `normal`: Normal queue length
- `priority`: Priority queue length

## Contributors <img src="https://minecraft.wiki/images/EnvSprite_heart.png?8a428">
| Name                | Helped With                               | GitHub   | Discord   |
| --------------------- | ----------------------------------------- | ----------- | ----------- |
| **Herodevc**            | database setup and ideas | Unknown | Herodevc |



## Roadmap

- [ ] Add all features from moobot.

</file-attachment-contents>

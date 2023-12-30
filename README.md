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
> 2b2t tools makes use of 2 bots and to run you will also require 2 paid Minecraft accounts.

### Docker 🐳 (Not recommended at the moment)

Using Docker at the moment is not recommended as it may be slower updated than the python version below.

If you have Docker installed, you can easily get 2b2t tools up and running. Follow the steps below:

1. Open your terminal.
2. Pull the Docker image from the Docker Hub using the following command:

```bash
docker pull SOON!
```

After pulling the image, run the Docker container with the following command:

```bash
docker run -p 8000:8000 SOON!
```

This command will start 2b2t tools and map it to port 5000 on your local machine.

Open your web browser and navigate to http://localhost:5000/docs to access the docs and api endpoints.
Please note that Docker must be installed and running on your machine to execute these steps. If you don't have Docker installed, you can download it from [here](https://docs.docker.com/get-docker/).

### Python 🐍

If you dont have Docker installed, you can easily get 2b2t tools up and running using python. Follow the steps below:

1. Open your terminal.
2. Clone the latest version of this repository using the following command:

```bash
git clone https://github.com/the-lodestone-project/2b2t-tools.git
```

3. Move to the new directory:

```bash
cd 2b2t-tools
```

4. Install all the dependencies using following command:

```bash
pip install -r requirements.txt
```

After cloning the repository and installing all the dependencies, run the python script with the following command:

```bash
python api/main.py
```

This command will start 2b2t tools and map it to port 5000 on your local machine.

Open your web browser and navigate to http://localhost:5000/docs to access the docs and api endpoints.
Please note that Python and pip must be installed and running on your machine to execute these steps. If you don't have python and pip installed, you can download it from [here](https://www.python.org/downloads/).


### Running and Logging In
The first time you run your bot, 2b2t tools will prompt you to log in. Follow the login prompts to authenticate your bots and connect it to 2b2t.org.


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

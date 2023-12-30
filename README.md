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

* <img src="https://minecraft.wiki/images/ItemSprite_compass.png?2364d"> Supports Minecraft 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19 and 1.20.1.
* <img src="https://minecraft.wiki/images/EntitySprite_tamed-wolf.png?e90cb"> Entity knowledge and tracking.
* <img src="https://minecraft.wiki/images/EnvSprite_non-renewable-resource.png?44294"> Block knowledge. You can query the world around you. Milliseconds to find any block.
* <img src="https://minecraft.wiki/images/EnvSprite_sprint.png?e9341"> Physics and movement - handle all bounding boxes
* <img src="https://minecraft.wiki/images/EffectSprite_strength-revision-1.png?8da27"> Attacking entities and using vehicles.
* <img src="https://minecraft.wiki/images/EnvSprite_two-by-two.png?56fdc"> Inventory management.
* <img src="https://minecraft.wiki/images/BlockSprite_crafting-table.png?1ea45"> Crafting, chests, dispensers, enchantment tables.
* <img src="https://minecraft.wiki/images/EnvSprite_item.png?89d23"> Digging and building.
* <img src="https://minecraft.wiki/images/BlockSprite_brewing-stand.png?918de"> Miscellaneous stuff such as knowing your health and whether it is raining.
* <img src="https://minecraft.wiki/images/EffectSprite_strength-revision-1.png?8da27"> Activating blocks and using items.
* <img src="https://minecraft.wiki/images/ItemSprite_oak-sign.png?e1d26"> Chat.
* <img src="https://minecraft.wiki/images/EffectSprite_particle-speed.png?0ed64"> Plugins for many servers.

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



### Using the Lodestone CLI

Lodestone also offers an easy to use command line intercace (CLI). This allows you to use the basic functions of lodestone.
the CLI offers auto tab complete and has real time chat logs.

To use the CLI run the following command:
```bash
python -m lodestone -u USERNAME -h HOST -p PORT -v VERSION
```

> [!IMPORTANT]
> `username` and `host` are required options. <img src="https://minecraft.wiki/images/EffectSprite_particle-speed.png?0ed64">

> [!WARNING]
> Do not share your Minecraft info to anyone. <img src="https://minecraft.wiki/images/EffectSprite_strength-revision-1.png?8da27">

<details open>
<summary>Command line arguments</summary>
<br>

The command line arguments available are:

* `--username` or `-u`: The Minecraft username the bot will log into. <img src="https://minecraft.wiki/images/EnvSprite_emote.png?37574">
* `--host` or `-h`: The IP address or hostname of the Minecraft server. <img src="https://minecraft.wiki/images/EffectSprite_strength-revision-1.png?8da27">
* `--port` or `-p`: The port number the Minecraft server is listening on. Default is 25565. <img src="https://minecraft.wiki/images/EffectSprite_strength-revision-1.png?8da27">
* `--auth`: The authentication method your account requires (mojang/microsoft/cracked). Default is "microsoft". <img src="https://minecraft.wiki/images/EffectSprite_strength-revision-1.png?8da27">
* `--version` or `-v` : Minecraft version to use when connecting to a server. Default is auto. <img src="https://minecraft.wiki/images/EffectSprite_strength-revision-1.png?8da27">

</details>

## Contributors <img src="https://minecraft.wiki/images/EnvSprite_heart.png?8a428">
| Name                | Helped With                               | GitHub   | Discord   |
| --------------------- | ----------------------------------------- | ----------- | ----------- |
| **Katzengott**            | fishing bot and cactus bot | [@Katzengott](https://github.com/Katzengott) | edelkatze |



## Roadmap

- [ ] Add config.json file
- [X] Add [click](https://github.com/pallets/click)
- [X] Change to use as Pip package for better use
- [X] Add Discord integration
- [ ] Add Custom code runner (a way for users to test their own bot code in a nice and simple way)

## MineFlayer 🚀

Mineflayer is a complex library that allows you to control Minecraft accounts through a powerful, stable, and high-level JavaScript API

## Discord

https://discord.gg/Fa7HZgkczz

## Credits

<a href="https://github.com/PrismarineJS/mineflayer" target="_blank">MineFlayer</a>

---

Screenshots:
[Dashboard](https://imgur.com/a/Hceiwhp)
[Settings](https://imgur.com/a/9p1YbtE)

</file-attachment-contents>

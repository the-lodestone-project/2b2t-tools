import discord
from discord.ext import commands
import json, requests


bot = commands.Bot()

@bot.slash_command(
  name="status",
)
async def first_slash(ctx): 
    data = requests.get("http://localhost:5000/api/bot/status").json()
    embed=discord.Embed(title="2b2t tools - bot status", color=0x1a5fb4)
    embed.add_field(name="position", value=f"{data['result']['position']}", inline=True)
    embed.add_field(name="eta", value=f"{data['result']['eta']}", inline=True)
    embed.add_field(name="username", value=f"{data['result']['username']}", inline=True)
    embed.set_thumbnail(url=f"https://mc-heads.net/avatar/{data['result']['username']}")
    # embed.set_footer(text="{data['username']}")
    await ctx.respond(embed=embed)
    
  
@bot.slash_command(
  name="random",
)
async def first_slash(ctx): 
    data = requests.get("http://localhost:5000/api/random").json()
    embed=discord.Embed(title="2b2t tools - Random message from database", color=0x1a5fb4)
    embed.add_field(name="Username", value=f"{data['result']['message'][0]}", inline=True)
    embed.add_field(name="Message", value=f"{data['result']['message'][1]}", inline=True)
    embed.add_field(name="Timestamp", value=f"{data['result']['message'][2]}", inline=True)
    embed.set_thumbnail(url=f"https://mc-heads.net/avatar/{data['result']['message'][0]}")
    # embed.set_footer(text="{data['username']}")
    await ctx.respond(embed=embed)
    

bot.run("MTE5MDQwNzY0MzI4Njc0OTI4NQ.GeuXr4.yMh5KKN5Sz-1af7niJT53BvJf8nwVI_Ptxixhc")
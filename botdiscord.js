var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready",function()
{
  console.log("Botul funcioneaza");
})

bot.on("message",function(message)
{
  if(message.content === "salut"){
    bot.sendMessage(message,"Neata,printeso!")
  }
})

bot.on("message",function(message){
  if(message.content == "clau"){
    bot.sendMessage(message,"Claudiu e but!")
  }
})

bot.loginWithToken("MjAyMzIxOTE1ODEyMTE4NTI4.CmYqdw.DRpjzCSIT3qWIv1Y4jflsLI1K3E");

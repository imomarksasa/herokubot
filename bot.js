
const client = new Discord.Client();
const prefix = '+';





client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by BadGuY');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("idle");
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


if (!Discord) {
    var Discord = require(`discord.js`);
};
if (!client) {
    var client = new Discord.Client();
}

if (!fs) {
    var fs = require(`fs`);
}
var data = JSON.parse(fs.readFileSync(`./data.json`, `UTF8`));
if (!prefix) {
    var prefix = data.prefix;
} else {
    prefix = data.prefix;
};
client.on(`message`, msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    var args = msg.content.slice(prefix.length).split(` `);
    var command = `${args[0]}`;
    switch (command) {
        case `vip`:
            if (msg.author.id !== data.ownerID) return;
            var cmd = args[1];
            if (!cmd) return msg.reply(`what command you are looking for ?`);
            switch(cmd) {
                case `move`:
                    var guild = args[2];
                    if (!guild) return msg.reply(`I can't find this server \\:(`);
                    if (isNaN(parseInt(guild))) return msg.reply(`I can't find this server \\:(`);
                    if (guild.length !== msg.guild.id.length) return msg.reply(`I can't find this server \\:(`);
                    msg.channel.send(`invite me to your new server: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&guild_id=${guild}&permissions=2146958847`);
                    data.guildID = guild;
                break;
                case `prefix`:
                    var prfx = args[3];
                    if (!prefix) return msg.reply(`prefix ?`);
                    data.prefix = prfx.trim();
                    msg.channel.send(`done , my prefix now is : ${prfx}`);
                break;
            }
        break;
    };
    fs.writeFileSync(`./data.json`, JSON.stringify(data, (null, 4)));
});
client.on(`guildCreate`, guild => {
    if (guild.id !== data.guildID) guild.leave();
    setTimeout(function Sweetie(){
        client.guilds.forEach(g => {
            if (g.id !== data.guildID) guild.leave();
        });
    }, 5000);
});

client.on(`ready`, () => {
    client.guilds.forEach(guild => {
        if (guild.id !== data.guildID) guild.leave();
    });
});


client.login(process.env.BOT_TOKEN);

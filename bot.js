var fs = require("fs");
var Discordie = require("discordie");
var client = new Discordie();
var prefix = "!"
var donotdisturb = false;
var trapCount = 0;

fs.stat("trapamount.txt", (err, stat) => {
	if(err == null) {
		fs.readFile("trapamount.txt", (err, data) => {
			if(err) throw err;
			trapCount = parseInt(data);
		});
	}
	if(err.code == "ENOENT") {
		fs.writeFile("trapamount.txt", trapCount, (err) => {
			if(err) throw err;
    		console.log("Current trap count:" + trapCount);
		});
	}
})

client.connect({
	token: "MjkwNjc0NTA0NTU0Nzc0NTMx.C6eXPQ.dxb7ys7JzApVJ-R1WYoGhOUYMWU",
});


client.Dispatcher.on("GATEWAY_READY", e => {
    console.log("Cock");
    console.log("Current trap count:" + trapCount);
    init();
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
	var message = e.message;
	var guild = e.message.guild;
	var channel = e.message.channel;
	var user = e.message.author;
	var content = message.content.toLowerCase();
	console.log(user.username + " : " + message.content);

	if(message.content.includes("<@176791551370985472>") && donotdisturb) {
		message.reply("you better hope to god you have a good reason to mention me directly.")
		console.log("------ YOUVE BEEN MENTIONED DIRECTLY -------")
	}

	if(content == "prefix?") {
		message.reply("current prefix is : " + prefix);
	}

	if(content.includes("trap")) {
		trapCount++;
  		client.User.setGame("with " + trapCount + " traps.");
		fs.writeFile("trapamount.txt", trapCount, (err) => {
			if(err) throw err;
    		console.log("Current trap count:" + trapCount);
		});
	}

	if(content.slice(0, prefix.length) == prefix) { // Check if the message is a command
		var args = content.slice(prefix.length).split(" ");
		var command = args[0];
		console.log(command);

	  	if(command == "coin") {
	  		var coin = Math.random();
	  		if(coin <= 0.5)
	  			message.reply("you got that good head my boy | " + coin + " |");
	  		else
	  			message.reply("you got them tails you furry | " + coin + " |");
	  	}

	  	if(command == "tcount") {
	  		message.reply("so far we've talked about genderbenders **" + trapCount + "** times! Wow!");
	  	}

	  	if(message.member.hasRole("322070910817402890")) { // one of the bot boys is doing a command
	  		if(command == "purge" && !isNaN(parseInt(args[1])))
	  			purgeChat(args[1], channel, message);

	  		if(command == "settcount" && !isNaN(parseInt(args[1]))) {
	  			trapCount = args[1];
				fs.writeFile("trapamount.txt", trapCount, (err) => {
					if(err) throw err;
		    		console.log("Current trap count:" + trapCount);
				});
	  		}
	  	}

	  	if(user.id == "176791551370985472") { // Make sure I'm the one doing this high risk command
	  		console.log("the god has spoken");
	  		if(command == "init")
	  			init();

	  		if(command == "mention")
	  			donotdisturb = !donotdisturb;
	  	}
	 }
});

console.log("haha lol im closing again >:DDD");

// Admin shit :scream:

function init() {
  	client.User.setGame("with " + trapCount + " traps.");
}

var purgeChat = function(lineCount, channel, message) {
  console.log("Purging " + lineCount + " messages in " + channel);
  channel.fetchMessages(lineCount, message).then(() => {
    console.log("Message cache : " + channel.messages.length);
    for(var i = 0; i < channel.messages.length; i++)
    {
      console.log("Deleting : " + channel.messages[i]);
      channel.messages[i].delete();
    }
  });
  message.delete();
  client.Messages.purgeAllCache();
}
const { Client, Intents, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bot is online');

});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);

    }else if (command == 'online'){
        message.channel.send('I am online!');
    }else if (command == 'creator'){
        client.commands.get('creator').execute(message, args);
    }else if (command == 'givemethesecretrole'){
        client.commands.get('givemethesecretrole').execute(message, args);
    }else if (command == 'canikick'){
        client.commands.get('canikick').execute(message, args);
    }else if (command == 'clear'){
        client.commands.get('clear').execute(message, args);
    }else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    }else if (command == 'ban'){
        client.commands.get('ban').execute(message, args);
    }
    
});

client.login('OTY5NDM0NjE0NDAzODI1NzEy.YmtWVw.oBYWk9cbWDRXqSNPi8sl6hDltco');

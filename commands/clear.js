module.exports = {
    name: 'clear',
    description: "This clears x amount of messages",
    async execute(message, args){
        if(!args[0]) return message.reply("Please enter the amount of messages to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a number!");
        if(args[0] > 100) return message.reply("The delete limit is 100 messages!");
        if(args[0] < 1) return message.reply("You must delete at least 1 message!");
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            message.channel.send("Done! Do not attempt to delete messages older than 14 days or the bot will crash!");
        });
    }
}
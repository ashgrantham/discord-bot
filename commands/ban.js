module.exports = {
    name: 'ban',
    description: "Bans people? pretty simple",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("User has been banned");
        }else{
            message.channel.send('Please enter a user to be banned');
        }
    }
}
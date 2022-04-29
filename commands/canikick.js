module.exports = {
    name: 'canikick',
    description: "checks if you can kick",
    execute(message, args){

        if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send('You can kick people!')
        }else {
            message.channel.send('You cannot kick people');
        
        }
        


    }
}
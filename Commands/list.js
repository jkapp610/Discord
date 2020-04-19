//connecting the api for discord to index.js
const Discord =require('discord.js');


module.exports = {
    //name of the command
    name: "list",
    //description of the command
    description: "prints all the roles on sever",
    //execute is the function that will run when the file is called
    execute(message,args){
       
        const embed = new Discord.RichEmbed()
             //creates a title for the embed
           
             .addField("Roles",message.guild.roles.map(ro => ro.name))
             .addBlankField()
             .addField("Channels",message.guild.channels.map(ch => ch.name))
             .addField("Notes","Jlk Bot Channels is a channel catigory Not A channel\n\n Roles @eveyone, and JLK Bot are not able to be manipulated")
             .addBlankField()
            .setColor(0xF1C40F);
             // bot outputs the embed message to the channel
             message.channel.send(embed);



    
        
 
        
    }

}

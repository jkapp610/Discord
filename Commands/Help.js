//connecting the api for discord to index.js
const Discord =require('discord.js');



module.exports = {
    //name of the command
    name: "Help",
    //description of what the cammad does
    description: "creates an enbed in discord",
    // execute is the function that will be ran when the file is called
    execute(message,args){
       

        Commands("Create Role","!CreateRole Cat red","Takes the name of the role and a color");
        Commands("Delete Role","!DelRole Cat","Takes the name if the role to delete");
        Commands("RemoveRole","!RemoveRole Cat","Takes the name of the role");
        Commands("Add Role","!AddRole Cat","Adds the role of the user who typed the command");
        Commands("Clear","!Clear 10","Takes the number of message they want to delete");
        Commands("Create Channel","!CreateChannel helloworld","Takes the channel name");
        Commands("Delete Channel","DelChannel","Deleate channel where the message is sent from\n(if i want to delete the helloworld cannel type this command in that channel)")
        function Commands(title,Example,des){
            const embed = new Discord.RichEmbed()
             //creates a title for the embed
             .setTitle(title)
             .addField("Example",Example)
             .addField("Description:",des)
             .setColor(0xF1C40F);
             // bot outputs the embed message to the channel
             message.channel.sendEmbed(embed);
        
        }
    }

}


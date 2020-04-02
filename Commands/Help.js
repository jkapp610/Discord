//connecting the api for discord to index.js
const Discord =require('discord.js');



module.exports = {
    //name of the command
    name: "help",
    //description of what the cammad does
    description: "creates an enbed in discord",
    // execute is the function that will be ran when the file is called
    execute(message,args){

        // calls to the diffent command

        Commands("Create Role","!CreateRole Cat , red\n !CreateRole this is a test , red","Takes the name of the role and a color","All commas have to have a space before and after in order for command to work as intended");

        Commands("Add Role","!AddRole Cat\n !AddRole this is a test , Evilmonkeys ","Adds the role to the user who typed the command if no name is provided.\n otherwise will add the role to the user provided","All commas have to have a space before and after in order for command to work as intended");

        Commands("Edit role","!editrole original name , new name","edit role changes the name of the role","All commas have to have a space before and after in order for command to work as intended")
        
        Commands("Delete Role","!DeleteRole Cat","Takes the name if the role to delete", "NONE");         //QA-ZACH: Modified values to represent that actual command

        Commands("RemoveRole","!RemoveRole Cat\n !removeRole this is a test , Evilmonkeys","Removesthe role of the user who typed the command if no name is provided.\n otherwise will add the role to the user provided","All commas have to have a space before and after in order for command to work as intended");
        
        Commands("Clear","!Clear 10"," deletes the number of messages that is provided by the user","NONE");

        Commands("Create Channel","!CreateChannel helloworld","crates a channel of the name that is provided by the user","NONE");

        Commands("Delete Channel","!deleteChannel channel name","Delete channelel that is passed by the user","NONE") //QA-ZACH: Modified values to represent that actual command

  
        
        
        
        
    

        function Commands(title,Example,des,additional_info){
            const embed = new Discord.RichEmbed()
             //creates a title for the embed
             .setTitle(title)
             .addField("Example",Example)
             .addField("Description:",des)
             .addField("Imprtant info",additional_info)
             .setColor(0xF1C40F);
             // bot outputs the embed message to the channel
             message.channel.send(embed);

        }
    }

}

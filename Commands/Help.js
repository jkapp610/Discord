//connecting the api for discord to index.js
const Discord =require('discord.js');



module.exports = {
    //name of the command
    name: "help",
    //description of what the cammad does
    description: "creates an enbed in discord",
    // execute is the function that will be ran when the file is called
    execute(message,args){
        const embed = new Discord.RichEmbed()
             //creates a title for the embed
             .setTitle("JLK bot Commands")
             .addField("Command Info","All command must start with ! \n Command name are Not case sensitive, but Role and Channel names are case sensitive \n All Commands that have a comma have to have a space before and after the comma in order for command to work as intended")
             .addBlankField()
             .addField("List","Example: !List\n\nDescription: will show the roles and channels on the sever")
             .addBlankField()
             .addField("Create Role","Example: !CreateRole Cat , red OR !CreateRole this is a test , red\n\nDescription: Crates the role based on the name passed in")
             .addBlankField()
             .addField("Add Role","Example: AddRole Cat OR !AddRole this is a test , Evilmonkeys \n\nDescription: Adds the role to the user who typed the command if no name is provided. otherwise will add the role to the user provided ")
            .addBlankField()
            .addField("Edit Role","Example: !editrole original name , new name OR editrole original name , new name , color \n\nDescription: edits the name and the color of the role the color is optional  ")
            .addBlankField()
            .addField("Edit Color","Example: !editcolor rolename , color\n\n Description: changes the color of the role")
            .addBlankField()
            .addField("Delete Role","Example:!DeleteRole Cat\n\nDescrition: deletes the role passed in by user")
            .addBlankField()
            .addField("Remove Role","Example: !RemoveRole Cat !removeRole this is a test , Evilmonkeys \n\n Description: Removes the role of the user who typed the command if no name is provided. otherwise will remove the role to the user provided")
            .addBlankField()
            .addField("Clear","Example:!Clear 10 \n\nDescription: deletes the number of messages that is provided by the user")
            .addBlankField()
            .addField("Create Channel","Example:!CreateChannel hello world , text  OR !CreateChannel this is a test , voice\n\nDescription: crates a channel of the name  and type that is provided by the user ")
            .addBlankField()
            .addField("Delete Channel","Example!deleteChannel channel name \n\n Description: deletes the channelel that is passed by the user")
            .setColor(0xF1C40F);
             // bot outputs the embed message to the channel
             message.channel.send(embed);

          
           


        // calls to the diffent command

        /*Commands("Create Role","!CreateRole Cat , red\n !CreateRole this is a test , red","Takes the name of the role and a color","All commas have to have a space before and after in order for command to work as intended");

        Commands("Add Role","!AddRole Cat\n !AddRole this is a test , Evilmonkeys ","Adds the role to the user who typed the command if no name is provided.\n otherwise will add the role to the user provided","All commas have to have a space before and after in order for command to work as intended");

        Commands("Edit role","!editrole original name , new name","edit role changes the name of the role","All commas have to have a space before and after in order for command to work as intended")
        
        Commands("Delete Role","!DeleteRole Cat","Takes the name if the role to delete", "NONE");         //QA-ZACH: Modified values to represent that actual command

        Commands("RemoveRole","!RemoveRole Cat\n !removeRole this is a test , Evilmonkeys","Removesthe role of the user who typed the command if no name is provided.\n otherwise will add the role to the user provided","All commas have to have a space before and after in order for command to work as intended");
        
        Commands("Clear","!Clear 10"," deletes the number of messages that is provided by the user","NONE");

        Commands("Create Channel","!CreateChannel helloworld","crates a channel of the name that is provided by the user","NONE");

        Commands("Delete Channel","!deleteChannel channel name","Delete channelel that is passed by the user","NONE") //QA-ZACH: Modified values to represent that actual command */

  
        
        
        
        
    

    }

}


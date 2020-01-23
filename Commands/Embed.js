//connecting the api for discord to index.js
const Discord =require('discord.js');



module.exports = {
    //name of the command
    name: "Embed",
    //description of what the cammad does
    description: "creates an enbed in discord",
    // execute is the function that will be ran when the file is called
    execute(message,args){
        //creates the embed (content block)
        const embed = new Discord.RichEmbed()
        //creates a title for the embed
        .setTitle("User Info")
        //adds  the sender username to the embed
        .addField("Name",message.author.username)
        //adds the server name where this embed is being executed to the embed
        .addField("Current Server",message.guild.name)
        //changes the color of the embed using hex code
        .setColor(0xF1C40F);
        // bot outputs the embed message to the channel
        message.channel.sendEmbed(embed);
    }

}
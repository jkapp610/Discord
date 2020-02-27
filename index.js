//connecting the api for discord to index.js(like including library in c++)
const Discord =require('discord.js');
//declaring the bot 
const bot = new Discord.Client();

// token is the password to the bot
const token = 'NjY1MDAyMDA0ODQxNjI3NjU4.XlgDig.VuSHpYeTgO4KKAHPDIU-1IEmPZQ';
//constant for the prefix 
const Prefix = '!';
// incuding the fs api for working with files (like including library in c++)
const fs = require('fs');

// create a discord collection  for storing the different commands
bot.commands = new Discord.Collection();

//get all the differnt command files that end with .js
const commandfiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));

// loop though the folder
for(const file of commandfiles){
    const command = require(`./Commands/${file}`);
    // set name and the command 
    bot.commands.set(command.name,command);
}

// when bot is online message the terminal bot is online
bot.on('ready',()=>{
    console.log('JLK BOT is online!');


})

// listens for the diffent command being typed
bot.on('message',msg=>{
    /*if the message does  not start with the prefix 
    or bot prefents bot form replying to itsself return  */ 

    if(!msg.content.startsWith(Prefix)|| (msg.author.bot)){
        return

    }
    // splits the prefix off from the arguments and split based on spaces
    const args= msg.content.substring(Prefix.length).split(" ");
    //set the first args to new varaiable called comandName and make the command name all lowercase
    const commandName =args[0].toLowerCase();
    //if there is not a command that maches the input output error message
    if( !bot.commands.has(commandName)){
       return msg.channel.send(`Error: there is no command that is named ${commandName}`);
    }
    //try to get the command 
    try{
        bot.commands.get(commandName).execute(msg,args);
    }
    //catch any error
    catch(error){
        //output error to cosole
        console.error(error);
        //output error to user
        msg.channel.send("Error somthing went worng please try to run the command over");
    }
    
 
  
});

//log in to the bot
bot.login(token);
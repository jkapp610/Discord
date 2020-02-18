//connecting the api for discord to index.js(like including library in c++)
const Discord =require('discord.js');
//declaring the bot 
const bot = new Discord.Client();

// token is the password to the bot
const token = 'NjY1MDAyMDA0ODQxNjI3NjU4.Xh3wLw.wwc00j_BNrBEy1ugiE4WDl7fDuo';
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
    // splits the prefix off from the argument
    const args= msg.content.substring(Prefix.length).split(" ");
    //swich case
    msg.guild.roles.findAll
    switch(args[0]){
       
        //if user types hello
        case'Hello':
            //reply 
            bot.commands.get('Hello').execute(msg,args);
            
            break;
        // if user types Bye
        case'Bye':
            //call the bye cammand
            bot.commands.get('Bye').execute(msg,args);
            break;
        //if uer types website
        case'Website':
            //call website command 
            bot.commands.get('Website').execute(msg,args);
            break;
        //if user types clear 
        case'Clear':
            //call clear command pasiing the 
            bot.commands.get('Clear').execute(msg,args);

            break;
        //if user types Embed
        case'Embed':
           //call the embed command
           bot.commands.get('Embed').execute(msg,args);
            break;
        //if user types !Emoji
        case"Emoji":
            //call the emoji file
            bot.commands.get('Emoji').execute(msg,args);
            break;
            //if user puts eye emoji 
            case"👀":
                
                 //call the emoji file
                bot.commands.get('Emoji').execute(msg,args);
                break;
            // create role 
           case "CreateRole":
                
                //call the create role command
                bot.commands.get('CreateRole').execute(msg,args);
               
                 break;

            case 'AddRole':
                bot.commands.get('AddRole').execute(msg,args);
                break;


            case"RemoveRole":
                bot.commands.get('RemoveRole').execute(msg,args)
                break;
            
            case "DelRole":
                bot.commands.get('DeleteRole').execute(msg,args)
               
                break;
            case "CreateChannel":
                bot.commands.get('CreateChannel').execute(msg,args)
                break;
            case "DelChannel":
                bot.commands.get('DeleteChannel').execute(msg,args)
                break;

            case"Help":
            bot.commands.get('Help').execute(msg,args)
            break;

            case "Edit":
                bot.commands.get('EditRole').execute(msg,args)


                



            
        
    }
    
 
  
});

//log in to the bot
bot.login(token);
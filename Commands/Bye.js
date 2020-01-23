module.exports = {
    //name of the command
    name: "Bye",
    //description of the command
    description: "says good bye",
    //execute is the function that will run when the file is called
    execute(message,args){
        // bot replys good bye 
        message.reply('Good bye  Friend !!! :(')
    }

}

module.exports = {
    //name of the command 
    name: "hello",
    //description of the command
    description: "says hello",
    //execute is the function that gets ran when the file is called
    execute(message,args){
        //bot replys hello friend
        message.reply('Hello Friend !!! :)')
    }

}
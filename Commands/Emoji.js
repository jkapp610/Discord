module.exports = {
    //name of the command
    name: "Emoji",
    //description of the command
    description: "replys with an emoji",
    //execute is the function that will run when the file is called
    execute(message,args){
        // bot replys with an emoji message
        message.channel.send(":eyes:" );
    }

}

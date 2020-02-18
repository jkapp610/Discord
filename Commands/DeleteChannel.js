module.exports = {
    //example of the command !CreateRole Cat BLUE

    //name of the command 
    name: "DeleteChannel",
    //description of the command
    description: "Deletes current channel",
    //execute is the function that gets ran when the file is called
    execute(message,args){
        
        
        // call the Deleate role
        message.channel.delete()
        // outputs error message that the role was created
        .then(role => console.log('Channel Deleted'))
        .catch(console.error)
        
    }

}
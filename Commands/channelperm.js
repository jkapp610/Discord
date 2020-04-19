module.exports = {
    //example of the command !Createchannel

    //name of the command
    name: "channelperm",
    //description of the command
    description: "Creates a new text Channel",
    //execute is the function that gets ran when the file is called
    execute(message,args){
        let mychannel = message.guild.channels.find(ch => ch.name === "test2");
        let myRole = message.guild.roles.find(rol => rol.name === "dog");
       console.log(mychannel.permissionsFor(myRole))
        //message.channel.send(myperm)




    }
}
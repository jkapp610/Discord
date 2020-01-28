
  module.exports = {
    //example of the command !AddRole role name

    //name of the command 
    name: "AddRole",
    //description of the command
    description: "Add a role ",
    //execute is the function that gets ran when the file is called
    execute(message,args){
        //get the menber that sent the message
        let member = message.member;
        //set the role
        let myRole = message.guild.roles.find(rol => rol.name === args[1]);
        // add the role to user that sent the message
        member.addRole(myRole).catch(console.error);



    }
}          
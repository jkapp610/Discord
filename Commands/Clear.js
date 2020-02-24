module.exports = {
    //name of command
    name: "clear",
    // description of command
    description: "clears messages from the channel given an argument",
     //execute is the function that will run when the file is called
    execute(message,args){
         //if there is no 2nd argument 
        if(!args[1]){
            // output error message 
            return message.reply('Error Please enter two arguments');
        }
        //if the 2nd arument is not a number
         else if(isNaN(args[1])){
            //bot gives error message to 
            return message.reply('Error please enter a number!!');
    }
    else{   
        // set the number of deleate  to +1
        var numdel = parseInt(args[1])+1;
         // deleate the number of messageges 
        message.channel.bulkDelete(numdel);
        }
    }
    

}












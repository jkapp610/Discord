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

        if (numdel > 0 && numdel < 101) {           //QA-ZACH: Added if statement to prevent bot from crashing when enterting a value less than 0 and a value greater than or equal to 0
          message.channel.bulkDelete(numdel);
        } else {
          return message.reply('Error please enter a valid number between 0,100'); //QA-ZACH: added a error message to handle error
        }
        }
    }


}

module.exports = {
    //example of the command !CreateRole Cat BLUE

    //name of the command
    name: "createrole",
    //description of the command
    description: "Creates a role ",
    //execute is the function that gets run when the file is called
    execute(message,args){
        //set  name and color
        let name = args[1];                                 //QA-ZACH: Cannot create a role that have two more words in it.
        let usercolor = args[2];


        //check to see if there is a role name is passed in
        //if not return an error
        if(!name){

            return message.channel.send('Error: there is no role name given ');
        }
        //check to see if the role already exists
        const Role = message.guild.roles.find(rol => rol.name === name);
        //if it does retun error
        if(Role != null){
            return message.channel.send(`Error: the role ${Role} already exists`);

        }

        //check to see if a third argument is passed in
        //if not set color to a defult color
        if(!usercolor|| usercolor === "#000000"){
            //set color to a default
            usercolor = "BLACK";//hex code for black

        }
        else{
             //set color to uppercase
            usercolor= usercolor.toUpperCase();
            // call check color if it returns false
            if (checkcolor(usercolor) === false){
                //return(exit command)
                return
            }
          }


         // call the create role function
        message.guild.createRole({
            name: name, //QA-ZACH: this current allows the user to exceed the max character limit, but does not inform the user that they did preventing the creation of the role
            color: usercolor,
        // outputs message that the role was created or an error if there were any

        }).then((newrole) => {
            message.channel.send(`Role ${newrole} Created`)})
        .catch(console.error)
        // fuction for making sure the that the color is a color
        function checkcolor(color){
            // array of accepted colors
           const colors = ['RED','GREEN','WHITE','BLACK',"BLUE","PINK","GOLD","PURPLE"];
           // array of hex charectors
           const hexchar =["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
           //bool to keep track of if the color is accepted
          var bool;
          // keeps count of the number of charectors in color are hex charector
          var hexcount =0;

           //if the color is a hex
           if(color.startsWith('#')){
               //check to see of the hex color is the right length
               if(color.length===7){
                   //set bool to true
                   bool= true


                    // loop to though each char in the color string
                   for(i=1;i<color.length;i++){
                       // loop though the the hexcharector array
                       for(j=0;j<hexchar.length;j++){
                           // if a charector is a hex charector
                           if(color[i]=== hexchar[j]){
                               // add one to hex count
                               hexcount++;
                           }
                       }

                   }
                   //if the hex count is less than 6
                   if (hexcount < 6){
                        // output error message
                         message.channel.send(`${color} Is not a hex color`);
                        // set bool to false
                       bool = false;
                   }


                }
                //hex value is not of the right length
                else{
                    // set bool to false
                    bool = false;
                }


           }

           //color is not a hex value
           else{
           // otherwise loop though the  accepted color array
                bool = false;
                for(i=0;i<colors.length;i++){
                    //if the color is in the array
                    if(color === colors[i]){
                        //bool equals true
                        bool = true;
                    }
                }
            }
           //if bool = false output error
            if(bool === false){
                // error message
                message.channel.send(`${color} is not a color that is recogized`);
                //returm false
                return false;
            }


        }


        }


}

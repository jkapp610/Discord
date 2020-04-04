module.exports = {
    //name of the command
    name: "editcolor",
    //description of the command
    description: "edits the color of a role",
    //execute is the function that will run when the file is called
    execute(message,args){

        //Check to see if the message sender has the owner role or manage roles
        let ownerRole = message.member.roles.find(rol => rol.name === "Owner");
        let manRole = message.member.roles.find(rol => rol.name === "Manage Roles");
        // if sender dies not have owner role 
        if((ownerRole === null) && (manRole === null)){
            // return error
            return message.channel.send(`Error: ${message.member} you not have one or both of the following roles Owner or Manager Roles`);
  
        }




    
    //setname and color
    let name;                                 
    let usercolor;

     for(i=1;i < args.length;i++){
        //if index is flag charector
        if(args[i]!= ","){
            //
           if(i === 1){
               name= args[i];
           }
        
           else
            name= name + " "+args[i];
            //message.channel.send(`this is name at index${i} is ${name}` );
        }
        else{
            usercolor = args[i+1];
            i++
        }

        
    }
   //check to see if there is a role name is passed in
        //if not return an error
        if(!name){

            return message.channel.send('Error: there is no role name given ');
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

        
        //Set the role that needs to be changed
        const myRole = message.guild.roles.find(rol => rol.name === name);
       
        
        //if the role exists (myRole! = null)
        if(myRole!= null){
            // Edit name of a role
            myRole.edit({color: usercolor })
            .then(newcolor=>{
                message.channel.send(`The role ${myRole} was changed to ${usercolor}`)})
            .catch(console.error)
        }
        else{
            //output a message error message
            message.channel.send(`Error: the role ${name} does not exist`); 
        }




        function checkcolor(color){
            // array of accepted colors
           const colors = ['RED','GREEN','WHITE','BLACK',"BLUE","ORANGE","GOLD","PURPLE"];
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

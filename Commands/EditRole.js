
module.exports = {
    //name of the command
    name: "editrole",
    //description of the command
    description: "Delete role from channel",
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



    
    //set the new name
    let newName;
    let rolename;
    let newnameloc;
    let usercolor;
    for(i=1;i < args.length;i++){
        //if index is Not flag charector (, tells you when you have reached the end of name) 
        if(args[i]!= ","){
            //if it is the first word of the role name set it equal to rolename
           if(i === 1){
               rolename= args[i];
           }
           // if it is not the first word of the role name add it to the end of the rolename
           else
            rolename= rolename + " "+args[i];
            //message.channel.send(`this is name at index${i} is ${name}` );
        }
        //if it is the flag charector
        else{
          // set memloc to i + 1 and break out the loop
          newnameloc= i+1;
          break;
          
        }
       
      }
    // loop though the last part  of the args array to get the newrole name and color if there is one
    for(j= newnameloc;j< args.length;j++){

       //if there args[j] is not a comma
       if(args[j]!= ","){
            //if set the first word of the members name set it equal to memname
            if(j === newnameloc){
           
                newName= args[newnameloc];
       
            }
            //else (there is more than one word) and add it to the end
            else{
                newName= newName + " "+args[j];
            }
        }
        //otherwise args at index is a comma(meaning there is a color passed in)
        else{

            usercolor = args[j+1];
            j++
        }
    }
       

    
    



        // if there is no origanl name given output error
        if(!rolename){
            return message.channel.send('Error: there is no original role name given ');
             }
        //output and error if no new role name is given
        if(!newName){
            return message.channel.send('Error: there is no new role name given ');
            
        }
        if((rolename === "@everyone")||(rolename === "JLK BOT")){
            return message.channel.send(`Error ${rolename} is a role whoes name can not modified `);
          }
            

      
        if(!usercolor){
        //Set the role that needs to be changed
        let myRole = message.guild.roles.find(rol => rol.name === rolename);
        
        //if the role exists (myRole! = null)
        if(myRole!= null){
            // Edit name of a role
            myRole.edit({name: newName})
            .then(newrole=>{
                message.channel.send(`The role ${rolename} was changed to ${newrole}`)})
            .catch(console.error)
        }
        else{
            //output a message error message
            message.channel.send(`Error: the role ${rolename} does not exist`); 
        }

        }
       else{
         //set color to uppercase
         usercolor= usercolor.toUpperCase();
         // call check color if it returns false
         if (checkcolor(usercolor) === false){
             //return(exit command)
             return
         }

        

        //Set the role that needs to be changed
        let myRole = message.guild.roles.find(rol => rol.name === rolename);
        
        //if the role exists (myRole! = null)
        if(myRole!= null){
            // Edit name of a role
            myRole.edit({name: newName, color: usercolor})
            .then(newrole=>{
                message.channel.send(`The role ${rolename} was changed to ${newrole}`)})
            .catch(console.error)
        }
        else{
            //output a message error message
            message.channel.send(`Error: the role ${rolename} does not exist`); 
        }
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

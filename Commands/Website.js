module.exports = {
  //name of the command
  name: "Website",
  //description of the command 
  description: "gives a link to website",
  execute(message,args){
    //bot replys to the channel with the website 
    message.channel.send('https://www.youtube.com/watch?v=SsoOG6ZeyUI');
            
    }

}
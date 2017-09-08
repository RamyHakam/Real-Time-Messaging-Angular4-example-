//Server Dependanceis 
var socketio= require('socket.io');
var express = require('express');
var http= require('http');
var player = require('play-sound')(opts = {})
var play = require('play');



//Creating our App

var app= express();
//Creating http server 
var server = http.createServer(app);
//adding socket io 

var io= socketio(server);

//on new user conections
io.on('connection',(socket)=> {
console.log("New User conections");
//on disConnections 

socket.on('SEND',function(Message){

    player.play('server.wav', function(err){
        if (err) throw err
      })
    console.log(Message);
    });

//Send Welcome Message To the user 

setInterval(()=>{
socket.emit('HiThere','Welocme To My Server Bro');
console.log("send from server");
},7000);

//Get Welcome Message From The User 

});







//Launch the Server on port 3000

server.listen(3000,()=>{
    console.log(`server running on port 3000`);
    })
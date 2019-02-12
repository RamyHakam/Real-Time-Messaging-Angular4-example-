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
//on send event from the user 
socket.on('SEND',function(Message){
    console.log('send from user ',Message);

    socket.emit('HiThere',createServerMessage());
    console.log("send from server",createServerMessage());
});

//Send Welcome Message To the user 

// setInterval(()=>{

// socket.emit('HiThere','Welocme To My Server Bro');
// console.log("send from server");
// },7000);

// //Get Welcome Message From The User 

 });




//create message function 
function createServerMessage() {
 return {'user':'Admin','message':'Pong from socket server'}
}

//Launch the Server on port 3000

server.listen(3000,()=>{
    console.log(`server running on port 3000`);
    })
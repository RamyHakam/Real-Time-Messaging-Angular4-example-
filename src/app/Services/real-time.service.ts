import { Injectable } from '@angular/core';
import { Socket, SocketIoModule } from 'ng-socket-io';
import 'rxjs/add/operator/map';
import * as io from 'socket.io-client';
@Injectable()
export class RealTimeService {
  //Create Socket instance 
  constructor( private mysocket : Socket ) {
   }

//Send Socket meessage From Angular 
SendME( message){
this.mysocket.emit('SEND',message);
}


//Recive Socket message from The  Node Server 


getFromEvent() {
  return this.mysocket
      .fromEvent<any>("HiThere")
      .map( data => data );
}



}





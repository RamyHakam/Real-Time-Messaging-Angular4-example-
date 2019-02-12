import { RealTimeService } from './../Services/real-time.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
CountMyMessages : number= 0;
CountServerMessages:number=0;
ChatArray :Array<{}>=[];
message={};

constructor( private myWS : RealTimeService ) {
this.myWS.getFromEvent().subscribe(
  result=>{console.log(result);


 this.CountServerMessages+=1; 
 
 //adding server message to the chat array
this.ChatArray.push(result);

},
  error=>{console.log(error)});
  
}



//sending event every 5s 
  ngOnInit() {
    this.message={'user':'User','message':'Ping Socket server'}
    setInterval(()=>{this.myWS.SendME(this.message);
    this.CountMyMessages+=1;
    this.ChatArray.push(this.message);
  },5000);
  
  }

}

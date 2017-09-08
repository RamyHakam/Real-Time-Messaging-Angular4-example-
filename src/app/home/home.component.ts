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
ChatArray :Array<string>=[];

constructor( private myWS : RealTimeService ) {
this.myWS.getFromEvent().subscribe(
  result=>{console.log(result);


 this.CountServerMessages+=1; 
  let sound =new Audio("assets/dist/sound/User.wav");
sound.play();  
this.ChatArray.push("Admin");

},
  error=>{console.log(error)});
  
}




  ngOnInit() {
    setInterval(()=>{this.myWS.SendME("What is Up Server !!");
  this.CountMyMessages+=1;
    this.ChatArray.push("User");

  },6000);
  
  }

}

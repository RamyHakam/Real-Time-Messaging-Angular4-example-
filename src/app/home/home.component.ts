import { RealTimeService } from './../Services/real-time.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private myWS : RealTimeService ) {

this.myWS.SendME("What is Up Server !!");
this.myWS.getFromEvent().subscribe(
  result=>{console.log(result)},
  error=>{console.log(error)});
  }


  ngOnInit() {
  }

}

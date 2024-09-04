import { Component, Host, HostListener } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   ngOnInit(){

    let a =new Observable((res)=>{
        console.log("this is observable");
        res.next("this is succes 1");
        res.error("this is error stops the execution");
        res.complete ();
        res.next("")})
    
     
      a.subscribe((res)=>
      {
        console.log("this is result")

      },
     (e)=>{
      console.log("error");
     },
     ()=>{
      console.log("this is complete");
     }

    )
     
   }
    
  }


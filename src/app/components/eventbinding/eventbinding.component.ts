import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {

  onclick() {
    console.log("thans for clicking") 
  }
  click2() {
    console.log("thans for 2clicking") 
  }
  click3(){
     alert("dont come again")
  }
keyword(){
  console.log("keyword")
}
blur(){
  confirm("blur")
}
   
  imgurl=".\\assets\\images\\blackcar.jpg" 
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway-databinding',
  templateUrl: './twoway-databinding.component.html',
  styleUrls: ['./twoway-databinding.component.css']
})
export class TwowayDatabindingComponent {
pass(e) {
 console.log("")
 this.result=e.value;
}
   

  result;
text: any;
  
  passdata(data){
   console.dir(data.value);
   this.result =data.value;
  }
  email;
    
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent {

 mygroup = {
   textcolor  : true,
   size :true

 }
nagroup ={
  textcolor :true,
  size :true,
  font :true
}

}

import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from '../child/child.component';
 
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
   
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ParentComponent {

msg="this from parent to child"

kalki
x;

chi(a){
   this.kalki=a;
}
@ViewChild(ChildComponent) pilodu;
  click()
  {
    console.log(this.pilodu?.store)
  }
}

 

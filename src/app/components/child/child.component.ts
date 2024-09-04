import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() cman="hello iam input";
  i=0;

  @Output() data =new EventEmitter;

 store ="child to parent "
  sman(){
    this.data .emit(this.store)
  }

  // ngOnInit(){
  //   this.cman
  //   console.log('this is onInit');
 // }

  ngOnChanges(chan:SimpleChange){
    
    console.log(chan)
    this.cman+this.i
    console.log('this is on changes');

  }
}

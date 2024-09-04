import { Component, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent {

  @ViewChildren("para") parargraph;
  click(){
    for(let x of this.parargraph)
      console.log(x.nativeElement.innerText);
      
  }
  @ViewChild("para") paragraph;
  pr(){
    console.log(this.paragraph.nativeElement.innerText)
  }


// @ViewChildren("par")para;  
 
}


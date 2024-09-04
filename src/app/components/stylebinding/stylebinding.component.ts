import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent {

 ananth ='red';
 ananth1 ='100px';

  ngOnInit(){
    setTimeout(()=>
    {
    this.ananth='green';
    this.ananth1='200px';
    },8000)
}

date = false;
passdata;
 

}
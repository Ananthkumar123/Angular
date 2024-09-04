import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selceted',
  templateUrl: './selceted.component.html',
  styleUrls: ['./selceted.component.css']
})
export class SelcetedComponent {
 course: any;

 constructor(private _roo:ActivatedRoute){

 }
 ngOnInit(){
  this.course =this._roo.snapshot.paramMap.get('name')
 }
}


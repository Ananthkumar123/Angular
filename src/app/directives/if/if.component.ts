import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent {
check=true;

courses =[ "html","css","java","cotilin,golang"];

emp =[
  {name :"ananth", age:22,role:"developer",id :1},
  {name :"shankar", age:22,role:"tester",id:334},
  {name :"vamsi", age:22,role:"admin" ,id:234},
  {name :"kumar", age:22,role:"all in one",id :345}

]
isvalid =true;
selectedValue ='One'
}

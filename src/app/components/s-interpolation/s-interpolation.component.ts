import { Component } from '@angular/core';

@Component({
  selector: 'app-s-interpolation',
  templateUrl: './s-interpolation.component.html',
  styleUrls: ['./s-interpolation.component.css']
})
export class SInterpolationComponent {

  name :String ="ananth";
  age : any= 22;
  Graduation :any ="Btech"
  phone_number :number=8688452374
  
  getmyname(){
    return this.name;
  }
  obj =
    {
      name :"ANANTH KUMAR OBJ",
      age : "22",
      profession : "Graduted"
    }
obj1 =[
  {
    name: "comrade",
    party: "cpi,cpm"
  },
  {
    name: "comrade2",
    party: "cpi,cpm"
  },
  {
    name: "comrad3",
    party: "cpi,cpm"
  }
]
imgurl=".\\assets\\images\\blackcar.jpg" 
   

}

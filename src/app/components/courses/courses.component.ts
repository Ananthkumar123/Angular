import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
ak;
abc;
  constructor(private _coursedetails:CoursesService, private _routing:Router)
  {

  }
 courses = this._coursedetails.getdetials();
 ngOnInit(){
   this.ak =this.courses.find(c => c.course_name==="angular")
   
 }

 press(n){
 this._routing.navigate(['selected/',n]);//route parameters //peri parameters==optional parmeters
  

 }
  
}

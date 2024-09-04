import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

 public getdetials(){
    return[
      {id:1 ,course_name :"java",fee :50000},
      {id:2 ,course_name :"python",fee :50000},
      {id:3 ,course_name :"flask",fee :50000},
      {id:4 ,course_name :"angular",fee :50000}
  
    ]
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
   
  

  registrationForm: FormGroup;
   constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['',Validators.required ],
      password: [''],
      cpassword: [''],
      city: [''],
      state: [''],
      pincode: ['']
    });
  }

  resgistrationform1 = new FormGroup({

    username :new FormControl('ananth',[Validators.required]),
    password :new FormControl(),

  })

  get username(){
    return this.registrationForm.get('username') //
  }

  postdata(){
    console.log(this.registrationForm.value);
  }
  


}

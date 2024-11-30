import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
studentForm :FormGroup= new FormGroup({
  email: new FormControl ("",[Validators.required,Validators.email]),
  password: new FormControl ("",[Validators.required,Validators.minLength(5)]),
})

check:any;
onclick(){
  this.check = this.studentForm.value
}

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  genders: string[] = ['male','female'];

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('male', Validators.required)
    });
  }

  onSubmit(){
    console.log(this.registerForm);
  }
}

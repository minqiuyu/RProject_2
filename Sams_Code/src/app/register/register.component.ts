import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Profile } from '../profile/profile.model';

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
      // 'userData': new Form
      'username': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'dob': new FormControl(null, Validators.required),
      'city': new FormControl(null),
      // 'state': 
      'gender': new FormControl('male', Validators.required),
      // 'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.registerForm);
    let profile: Profile = new Profile(this.registerForm.value.username);
    alert("New partial profile added! " + JSON.stringify(profile));
    this.registerForm.reset();
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.registerForm.get('hobbies')).push(control);
  }
}

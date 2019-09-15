import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Profile } from '../profile/profile.model';
import { ProfilesService } from '../profile/profiles.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  genders: string[] = ['male','female'];

  constructor(private profileServ: ProfilesService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'userName': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'userPassword': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'fName': new FormControl(null, Validators.required),
      'lName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'dob': new FormControl(null),
      'city': new FormControl(null, Validators.required),
      'gender': new FormControl('male', Validators.required),
      // 'hobbies': new FormArray([])
    });
    console.log(this.registerForm);
  }

  onSubmit(){
    console.log(JSON.stringify(this.registerForm.value) + " Values submitted");
    this.profileServ.addProfile(this.registerForm.value).subscribe((response)=>{
      console.log("REsponse from Add profile: " + response)
    }, (error)=>{
      console.log("Error, ruh roh! " + JSON.stringify(error));
    })
    // let profile: Profile = new Profile(this.registerForm.value.username);
    // alert("New partial profile added! " + JSON.stringify(profile));
    this.registerForm.reset();
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.registerForm.get('hobbies')).push(control);
  }
}

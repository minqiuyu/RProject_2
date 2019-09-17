import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../profile/profiles.service';
import { AuthService } from '../profile/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  profile: any;
  newProfile: any = {};
  editForm: FormGroup;
  genders = ['male','female'];
  constructor(private auth: AuthService, private proServ: ProfilesService) { }

  ngOnInit() {
    this.editForm = new FormGroup({
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
    this.profile = this.auth.user; 
    this.newProfile.userId = this.profile.userId;
    this.newProfile.userPassword=this.profile.userPassword;
    // this.auth.user = this.newProfile //reset the values for the logged in user to be equal to those just edited.
    }
  

  editProfile(obj){
    this.proServ.editProfile(obj).subscribe((res)=>{
      console.log(res);
      this.auth.user=res;
    }, (error)=>{
      console.log(error);
    })
    console.log(obj);
  }

}

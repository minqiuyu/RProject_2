import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProfilesService } from '../profile/profiles.service';
import { AuthService } from '../profile/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  @ViewChild('editForm', {static:true}) editForm;
  profile: any;
  newProfile: any = {};
  // editForm: FormGroup;
  genders = ['male','female'];
  constructor(private auth: AuthService, private proServ: ProfilesService) { }

  ngOnInit() {
    // this.editForm = new FormGroup({
    //   'userName': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    //   'fName': new FormControl(null, Validators.required),
    //   'lName': new FormControl(null, Validators.required),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'city': new FormControl(null, Validators.required),
    //   // 'hobbies': new FormArray([])
    // });
    this.profile = this.auth.user; 
    this.newProfile.userId = this.profile.userId;
    this.newProfile.userPassword=this.profile.userPassword;
    this.newProfile.gender = this.profile.gender;
    this.newProfile.dob = this.profile.dob;
    // this.auth.user = this.newProfile //reset the values for the logged in user to be equal to those just edited.
    }
  

  editProfile(obj){
    this.proServ.editProfile(obj).subscribe((res)=>{
      this.editForm.resetForm();
      console.log("Response from server")
      console.log(res);
      this.auth.user=res; 
      this.profile=res;//reset the value of logged in user.
    }, (error)=>{
      console.log(error);
    })
    console.log(obj);
  }

}

import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../profile/profiles.service';
import { FetchProfileService } from '../fetch-profile.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  username: any = "";
  constructor(private fetchServ: FetchProfileService, private proServ: ProfilesService) { }

  ngOnInit() {
  }

  sendResetEmail(username){
    // this.proServ.
    console.log(username);
    this.fetchServ.fetchProfileByUserName(username).subscribe((profile)=>{
      this.proServ.resetPassword(profile).subscribe((data)=>{
        console.log(data)
      }, (error)=>{
        console.log("ruh roh")
        console.log(error)
      })
    })
  }

}

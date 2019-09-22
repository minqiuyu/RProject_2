import { Component, OnInit } from '@angular/core';
import { PostService } from '../profile-page/post/post.service';
import { Post } from '../profile-page/post/post.model';
import { Profile } from 'selenium-webdriver/firefox';
import { ProfilesService } from '../profiles.service';
import { AuthService } from '../auth.service';
import { S3Service } from 'src/app/s3.service';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  myPosts: Post[];
  myProfile: any;
  image: any;
  constructor(private postServ: PostService, private profileServ: ProfilesService,
    private auth: AuthService, private s3Serv: S3Service) { }

  ngOnInit() {
    this.s3Serv.getImage("26-Raichu.png").subscribe((data)=>{
      // this.image
      console.log(data)
    }, (error)=>{
      this.image=error.error.text;
      console.log(error);
    })
  
    this.myProfile=this.auth.user
    console.log(this.myProfile.userId)
    this.postServ.fetchPostsByUserId(this.myProfile.userId).subscribe((response)=>{
      this.myPosts = response;

    })
    // this.auth.loggedInUser.subscribe((profile)=>{
    //   this.myProfile=profile;
    //   this.myProfile=this.auth.user;
    //   console.log(this.myProfile)
    // })

    // this.profileServ.fetchMyProfile(2).subscribe((data)=>{
    //   this.myProfile = data;
    //   console.log("my profile " + this.myProfile)

    // })
  }

}

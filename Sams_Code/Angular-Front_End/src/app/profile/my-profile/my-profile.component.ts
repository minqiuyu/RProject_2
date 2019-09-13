import { Component, OnInit } from '@angular/core';
import { PostService } from '../profile-page/post/post.service';
import { Post } from '../profile-page/post/post.model';
import { Profile } from 'selenium-webdriver/firefox';
import { ProfilesService } from '../profiles.service';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  myPosts: Post[];
  myProfile: Profile;
  constructor(private postServ: PostService, private profileServ: ProfilesService) { }

  ngOnInit() {
    this.postServ.fetchAllPosts().subscribe((data)=>{
      this.myPosts = data;
    })

    this.profileServ.fetchMyProfile(2).subscribe((data)=>{
      this.myProfile = data;
      console.log("my profile " + this.myProfile)

    })
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Profile } from '../profile.model';
import { ProfilesService } from '../profiles.service';
import { PostService } from './post/post.service';
import { SelectService } from 'src/app/select.service';
import { FetchProfileService } from 'src/app/fetch-profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  posts: any;
 profile: any;
  profiles: any;
  username: string;
  testProfile: Profile;
   
  constructor(private route: ActivatedRoute, 
              private fetchServ: FetchProfileService,
              private postServ: PostService,
    ) {

   }

  ngOnInit() {
    // uses the route params to fetch the profile.
    this.route.params
    .subscribe(
      (params: Params) =>{
        this.fetchServ.fetchProfileById(params.id).subscribe((data)=>{
          this.profile=data;
          this.postServ.fetchPostsByUserId(this.profile.userId).subscribe((posts)=>{
            this.posts = posts;
          })
        }) 

      }
    )
    // this.selectServ.selectedProfile.subscribe((data)=>{
    //   this.profile=data;
    //   console.log("Data from subject of the select service: " + data)
    // })
   
    
  }
 
}

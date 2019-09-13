import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Profile } from '../profile.model';
import { ProfilesService } from '../profiles.service';
import { PostService } from './post/post.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  posts: any;
 profile: Profile;
  profiles: any;
   
  constructor(private route: ActivatedRoute, 
              private proService: ProfilesService,
              private postServ: PostService
    ) {

   }
   loopProfiles(username: string){
    let selectedProfile: Profile;
    for(let p of this.profiles){
      if(p.getUsername() == username){
        selectedProfile = p;
      }
    }

    return selectedProfile;
   }
  fetchProfile(){
        this.route.params
        .subscribe(
          (params: Params) =>{
            this.profile = this.loopProfiles(params.username) // loops through the profiles from service to find the one matching the url params

            // this.profile.setUsername(params['username']);
            // console.log('Profile in profilepage ' + JSON.stringify(this.profile))
          }
        )
        
      }

  fetchAllPostsFromDB(){
    this.postServ.fetchAllPosts().subscribe((data)=>{
      this.posts = data;
      console.log(this.posts, " Posts from profile page.")
    })
  }
  ngOnInit() {
   this.proService.fetchProfilesFromDB().subscribe((data)=>{
     console.log(data, " from API")
    });
    console.log("Profiles from API: " + JSON.stringify(this.profiles))
    // this.profiles = this.proService.getProfiles().subscribe((data)=>{
    //   console.log("Profiles: " + data)
    // }, (error){
    //   console.log("Error caught: " + error)
    // });

    // console.log("proService: " + JSON.stringify(this.proService.getProfiles()))
    this.fetchProfile();
    // this.fetchPosts();
    if(this.posts == undefined){
      this.postServ.addFakePosts();
      this.posts = this.postServ.getPosts();
    }
    
  }
  fetchPosts(){
    // this.postServ.fetchTixFromDB().subscribe(data => {
    //   this.posts = data;
    // })
    }
}

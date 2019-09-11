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
 profile: Profile = new Profile();
  profiles: Profile[];
   
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
            console.log('Profile in profilepage ' + JSON.stringify(this.profile))
          }
        )
        
      }

  ngOnInit() {
    this.profiles = this.proService.getProfiles();
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

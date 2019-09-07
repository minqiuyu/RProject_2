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
  // data: any;
  // @Input() profile: Profile = new Profile();
   
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
            // this.profile = p;

            // this.profile.setUsername(params['username']);
            console.log('Profile in profilepage ' + JSON.stringify(this.profile))
          }
        )
        
      }

  ngOnInit() {
    this.profiles = this.proService.getProfiles();
    // console.log("proService: " + JSON.stringify(this.proService.getProfiles()))
    this.fetchProfile();
    this.fetchPosts();
    if(this.posts == undefined){
      this.postServ.addFakePosts();
      this.posts = this.postServ.getPosts();
    }
    // console.log('NgOnInit inside profile-page: ' + this.route.snapshot.params['username'])
    // this.profile = new Profile(this.route.snapshot.params['params'])
    // this.profile = new Profile();
    // this.profile.setUsername(this.route.snapshot.params['username']);
    
    // console.log('this.profile in prof page: ' + JSON.stringify(this.profile))
    // this.profile = new Profile(this.route.snapshot.params['username'])
  //   console.log('This.profile in profile page com. ' + this.profile)
  // this.route.queryParams
  // this.route.params
  //   .subscribe(
  //     (params: Params) =>{
  //       this.profile = params['username'];
  //       console.log('Profile in profilepage ' + this.profile)
  //     }
  //   )
  }
  fetchPosts(){
    this.postServ.fetchTixFromDB().subscribe(data => {
      this.posts = data;
    })
    }
}

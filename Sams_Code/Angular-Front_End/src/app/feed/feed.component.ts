import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../profile/profile-page/post/post.model';
import { PostService } from '../profile/profile-page/post/post.service';
import { Subscription } from 'rxjs';
import { ProfilesService } from '../profile/profiles.service';
import { Profile } from '../profile/profile.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  // post: Post = new Post(1,1,"First Post!","First posts body", 4, [1]);
  posts: Post[];
  testDataAll: any;
  testDataOne: any;
  testProfile = new Profile(5,"Angular","password",4072692222,"Sam","Jo", "male",1393,"Oviedo","samuel@gmail.com");
  postSubsc: Subscription;
  constructor(private postService: PostService, private profileServ: ProfilesService) { }

  ngOnInit() {
    // this.posts = this.postService.getPosts();
    this.postSubsc = this.postService.fetchAllPosts().subscribe((data)=>{
      console.log("data: " + JSON.stringify(data));
      this.posts = data;
      this.testDataAll=JSON.stringify(data);
    });

    this.postService.fetchOnePost(0).subscribe((data)=>{
      console.log("data " +JSON.stringify(data));
      this.testDataOne = JSON.stringify(data);
    })

    this.profileServ.fetchProfilesFromDB().subscribe((data)=>{
      console.log("All data from profiles " + JSON.stringify(data))
    })

    this.profileServ.addProfile(this.testProfile).subscribe((data)=>{
      console.log("Adding profile..." + data);
    })
    

  
  }

}

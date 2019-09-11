import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../profile/profile-page/post/post.model';
import { PostService } from '../profile/profile-page/post/post.service';
import { Subscription } from 'rxjs';

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
  testFood: any;
  postSubsc: Subscription;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postSubsc = this.postService.fetchAllPosts().subscribe((data)=>{
      console.log("data: " + JSON.stringify(data));
      this.testDataAll=JSON.stringify(data);
    });

    this.postService.fetchOnePost(0).subscribe((data)=>{
      console.log("data " +JSON.stringify(data));
      this.testDataOne = JSON.stringify(data);
    })
    this.testFood = {dishName:"sandwich", isTasty: true};
    this.postService.insertPost(this.testFood).subscribe((data)=>{
      console.log("data from insertion: " + data)
    });
    // console.log(this.arr);

  
  }

}

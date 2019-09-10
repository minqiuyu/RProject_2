import { Component, OnInit } from '@angular/core';
import { Post } from '../profile/profile-page/post/post.model';
import { PostService } from '../profile/profile-page/post/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  // post: Post = new Post(1,1,"First Post!","First posts body", 4, [1]);
  posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}

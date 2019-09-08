import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  post: Post;
  constructor() { }

  ngOnInit() {
  }

  setPost(title: string, body: string){
    this.post = new Post(1,'Sam',title,body);
    console.log(JSON.stringify(this.post) + " is post inside new post")
  }
}

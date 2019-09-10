import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  // @ViewChild('newPostForm', {static: true}) newPostForm: NgForm;
  post: Post;
  newPostForm: FormGroup;
  constructor(private postService: PostService) { }
  
  ngOnInit() {
    this.newPostForm = new FormGroup({
      'postTitle': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'postBody': new FormControl(null, Validators.required)
    });


  }

  setPost(title: string, body: string){
    // this.post = new Post(1,'Sam',title,body);
    // console.log(JSON.stringify(this.post) + " is post inside new post")
    // alert("Post submitted: " + JSON.stringify(this.post))
    // this.postService.addFakePosts();
    // this.postService.getPosts().push(this.post);
    // console.log(this.postService.getPosts())
    this.newPostForm.reset();
  }
}

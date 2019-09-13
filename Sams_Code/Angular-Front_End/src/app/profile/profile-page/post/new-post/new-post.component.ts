import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import MediumEditor from 'medium-editor';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit, AfterViewInit {
  @ViewChild('editable',{static:true}) editable: ElementRef;
  // @ViewChild('newPostForm', {static: true}) newPostForm: NgForm;
  post: Post;
  newPostForm: FormGroup;
  MediumEditor: any;
  constructor(private postService: PostService) { }
  
  ngOnInit() {
    this.newPostForm = new FormGroup({
      'postTitle': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'postBody': new FormControl(null, Validators.required)
    });
    }
    ngAfterViewInit(){
      this.editable = new MediumEditor(this.editable.nativeElement)
  

  }

  setPost(title: string, body: string){
 
    this.newPostForm.reset();
  }
}

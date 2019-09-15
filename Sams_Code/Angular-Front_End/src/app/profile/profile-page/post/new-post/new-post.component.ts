import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import MediumEditor from 'medium-editor';
import { AuthService } from 'src/app/profile/auth.service';

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
  myProfile: any;
  constructor(private postServ: PostService, private auth: AuthService) { }
  
  ngOnInit() {
    this.myProfile=this.auth.user;
    this.newPostForm = new FormGroup({
      // 'postId': new FormControl(4),
      'userId': new FormControl(this.myProfile.userId),
      'postTitle': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'postBody': new FormControl(null)
    });

    console.log(this.newPostForm)
    }
    ngAfterViewInit(){
      // this.editable.nativeElement.class="large"
      // this.editable = new MediumEditor(this.editable.nativeElement)
  

  }

  onSubmit(){
    this.postServ.insertPost(this.newPostForm.value).subscribe((data)=>{
      console.log("Inserted post" + JSON.stringify(data))
    }, (error)=>{
      console.log("Ruh roh " + JSON.stringify(error));
    })
    this.newPostForm.reset();
  }
}

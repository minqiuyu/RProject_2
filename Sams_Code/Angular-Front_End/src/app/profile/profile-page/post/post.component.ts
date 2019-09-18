import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: any;
  
  constructor(private postServ: PostService) { }

  ngOnInit() {
  }

  likePost(){
    console.log("like post method is empty! And there's no controller yet for it")
    this.postServ.likePost(this.post.postId).subscribe((data)=>{
      console.log("Post liked:")
      console.log(data)
      this.post=data;
    }, (error)=>{
      console.log("ruhoh");
      console.log(error);

    })

  }
}

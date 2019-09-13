import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit{
  posts: Post[] = [
    // new Post(1, 1, 'First Post', 'Hello from our social media app, {{insertNameHere}}'),
    // new Post(1, 1, 'First Post', 'Hello from our social media app, {{insertNameHere}}'),
    // new Post(1, 1, 'First Post', 'Hello from our social media app, {{insertNameHere}}'),
    // new Post(1, 1, 'First Post', 'Hello from our social media app, {{insertNameHere}}')


  ]

  private _Url = 'http://localhost:8080/Project2/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpServ: HttpClient) { }

  ngOnInit(){
    this.addFakePosts();
  }

  fetchAllPosts(): Observable<Post[]>{
    return this.httpServ.get(this._Url + "allPosts.do",this.httpOptions).pipe(
      map (res => res as any)
    )
  }

  fetchOnePost(id: number){
    return this.httpServ.get(this._Url + "allPosts/" + id + ".do", this.httpOptions).pipe(
      map (res => res as any)
    )
  }

  insertPost(food){
    console.log(food.dishName)
    // return this.httpServ.post(this._createPostUrl, {'dishName': food.dishName, 'isTasty': food.isTasty}, this.httpOptions).pipe(
    //   map (res => res as any)
    // )

  }

  addFakePosts(){
    this.posts = [
      new Post(1, 1, 'First Post', 'Hello from our social media app, {{insertNameHere}}'),
      new Post(1, 1, 'First Post', 'Hello from our social media app, {{insertNameHere}}'),
      new Post(1, 1, 'First Post', 'Hello from our social media app, {{insertNameHere}}'),
      new Post(1, 1, 'First Post', 'Hello from our social media app, {{insertNameHere}}')


    ]
  }

  getPosts(){
    return this.posts.slice();
  }

  setPosts(posts: any){
    this.posts = posts;

  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[]; //will need a model for this.

  private _postsUrl = 'http://localhost:8080/TestProj/html/Finance-manager.do';
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpServ: HttpClient) { }

  fetchTixFromDB(): Observable<any>{
    return this.httpServ.get(this._postsUrl,this.httpOptions).pipe(
      map (res => res as any)
    )
  }

  addFakePosts(){
    this.posts = [
      new Post(1, 'Sam', 'First Post', 'Hello from our social media app, {{insertNameHere}}')
    ]
  }

  getPosts(){
    return this.posts.slice();
  }

  setPosts(posts: any){
    this.posts = posts;

  }
}

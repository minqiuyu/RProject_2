import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: any[]; //will need a model for this.

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
      {title: "Hello from the post service :)",
      description: "Hello from the post service :)"},
      {title: "Awesome post",
      description: "Awesome post desc"},
      {title: "Awesome post",
      description: "Awesome post desc"},
      {title: "Awesome post",
      description: "Awesome post desc"},
      {title: "Awesome post",
      description: "Awesome post desc"}

    ]
  }

  getPosts(){
    return this.posts.slice();
  }

  setPosts(posts: any){
    this.posts = posts;

  }
}

import { Injectable } from '@angular/core';
import { Profile } from './profile.model';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  private _Url = 'http://localhost:8080/Project2/';
  private _oneProfileUrl = 'http://localhost:8080/Project2/'
  private _loginUrl = 'http://localhost:8080/';
  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Accept' : ['application/x-www-form-urlencoded', 'application/json'],
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   })
  // }

  constructor(private httpServ: HttpClient) { }
  fetchProfilesFromDB(): Observable<Profile[]>{
    return this.httpServ.get(this._Url + "GetAllP.do").pipe(
      map (res => res as any)
    )
  }

  fetchMyProfile(userId: number){
    return this.httpServ.get(this._Url + `SelectById/${userId}`).pipe(
      map (res => res as any)
    )
  }

  addProfile(profile: Profile){
    return this.httpServ.post(this._Url + "InsertProfile.do", profile).pipe(
      map(res => res as any)
    )
  }

 


  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      //client-side error
      console.error(`An error occurred: `, error.message)
    } else {
      // server-side error
      console.error(
        `Server returned code ${error.status}, ` +
        `body was : ${JSON.stringify(error.error)}`
      )
    }

    //return a user-facing message
    return throwError(
      'Ruh roh, please try again later.'
    )
  }

  
  sendLoginCreds(username: string, password: string): Observable<any> {
    // let body = new URLSearchParams();
    // body.set('username', username);
    // body.set('password', password);
    let body = `username=${username}&password=${password}`;
    return this.httpServ.post<any>(this._loginUrl, body)
    .pipe(
      // map (res => res as any)
      catchError(this.handleError)
    )
  }
  private profiles: Profile[] = [
    // new Profile("Luc","Lucnel", "Nordelus", "luc@luc.com","https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/365/420/618/636272701937419552.png"),
    // new Profile("Niro", "Niroj", "Nanganathan", "nn@nn.com", "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/365/420/618/636272701937419552.png"),
    // new Profile("Samwise", "Sam", "Jones", "lol@samwise.com", "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/365/420/618/636272701937419552.png"),
    // new Profile("Jimmy", "Minqiu","Yu", "jyu@jyu.com", "https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/365/420/618/636272701937419552.png")
  ]
  
  getProfiles(){
    return this.profiles.slice();
  }

  setProfiles(profiles: Profile[]){
    this.profiles = profiles;
  }
}

import { EventEmitter } from '@angular/core';
import { Subject, AsyncSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginCredentials } from '../login/login-credentials.model';
import { Router } from '@angular/router';
import { Profile } from './profile.model';

export class AuthService {
    loggedIn = false;
    loggingIn = new Subject<boolean>();
    loggedInUser= new AsyncSubject<any>();
    user: any;
    private _Url: string = 'http://localhost:9005/SpringMVCPractice/'
    private httpOptions = {
        headers: new HttpHeaders({
          // 'Accept' : ['application/json'],
          'Content-Type': 'application/json'
        })
      }
    
    constructor(private httpServ: HttpClient, private router: Router){}
    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() =>{
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }
    
  login(username: string, password: string):boolean {
        //testing this
        let credentials = new LoginCredentials(username, password);
        console.log(username, password)
        // {'userName': username, 'userPassword': password}
        this.httpServ.post(this._Url + "login.do", credentials,this.httpOptions).subscribe((response)=>{
            console.log("Response from login is: " + JSON.stringify(response));
            if(response!=null){
                this.loggedIn=true;
                this.loggingIn.next(true);
                this.user=response;
                this.loggedInUser.next(response);
                // this.router.navigate(['/feed']);
            }
        }, (error)=>{
            if(error.status!=200){
                console.log("Status is 400");
                return false;
            }
            else if(error.status===200){
                this.loggedIn = true;
                this.loggingIn.next(true);
                return true;
            }
           
            console.log(error);
        })
        console.log("Logged in: " + this.loggedIn)
        return false;
    }

    logout(){
        this.loggedIn = false;
        this.loggingIn.next(false);
    }
}
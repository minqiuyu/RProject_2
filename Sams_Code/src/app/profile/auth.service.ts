import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class AuthService {
    loggedIn = false;

    loggingIn = new Subject<boolean>();

    // loggingIn = new EventEmitter<boolean>();

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
    login(){
        this.loggedIn = true;
        this.loggingIn.next(true);
    }

    logout(){
        this.loggedIn = false;
        this.loggingIn.next(false);
    }
}
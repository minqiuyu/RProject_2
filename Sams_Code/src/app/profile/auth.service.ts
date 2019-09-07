import { EventEmitter } from '@angular/core';

export class AuthService {
    loggedIn = false;
    loggingIn = new EventEmitter<boolean>();

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
        this.loggingIn.emit(true);
    }

    logout(){
        this.loggedIn = false;
        this.loggingIn.emit(false);
    }
}
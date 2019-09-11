import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    CanActivateChild
} from '@angular/router';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.authService.isAuthenticated()
                .then(
                    (authenticated: boolean)=>{
                        if(authenticated){
                            return true;
                        } else {
                            alert("You are unauthorized to view this page. Redirecting...")
                            this.router.navigate(['/login']);
                        }
                    }
                )
                }

    canActivateChild(route: ActivatedRouteSnapshot,
                    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                        return this.canActivate(route,state);
                    }
}
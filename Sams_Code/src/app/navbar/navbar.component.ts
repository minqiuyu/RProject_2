import { Component, OnInit } from '@angular/core';
import { AuthService } from '../profile/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.auth.loggedIn;
    this.auth.loggingIn.subscribe(
      (loggedIn: boolean)=>{
        this.loggedIn = loggedIn;
      }
    )
  }

  onLogout(){
    this.auth.logout();
  }

}

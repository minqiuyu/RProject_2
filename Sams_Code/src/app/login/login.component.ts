import { Component, OnInit } from '@angular/core';
import { AuthService } from '../profile/auth.service';
import { ProfilesService } from '../profile/profiles.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;

  constructor(private auth: AuthService, private proService: ProfilesService) { }

  ngOnInit() {
  }

  onLogin(username: string, password: string){
    console.log("onLogin run from login component: Username and password entered: " + username + " " + password)
    this.proService.sendLoginCreds(this.username,this.password).subscribe(data => {
      console.log(data);
    });
    this.auth.login();
  }

  onLogout(){
    this.auth.logout();
  }
}

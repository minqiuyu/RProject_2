import { Component, OnInit } from '@angular/core';
import { AuthService } from '../profile/auth.service';
import { ProfilesService } from '../profile/profiles.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  private loginForm: FormGroup;

  constructor(private router: Router, private auth: AuthService, private proService: ProfilesService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'userName': new FormControl(null, Validators.required),
      'userPassword': new FormControl(null, Validators.required)
    })
  }

  onLogin(){
       let loginSuccessful = this.auth.login(this.loginForm.value.userName, this.loginForm.value.userPassword);
    this.loginForm.reset();
  }

  onLogout(){
    this.auth.logout();
  }
}

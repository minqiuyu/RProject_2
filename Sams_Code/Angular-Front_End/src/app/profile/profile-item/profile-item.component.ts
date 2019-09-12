import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'selenium-webdriver/firefox';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent implements OnInit {
  @Input() profile: Profile;
  
  constructor(private router: Router) { }

  navigateTo(username: string){
  
    console.log('Username clicked in profile-list: ' + username)
    // this.selectedProfile.emit(username)
    this.router.navigate(['/profiles', username])
    // this.router.navigate([':' + '{{profile.getUsername()}}'], {relativeTo: this.route})
  }

  ngOnInit() {
  }

  // navigateTo(profile: Profile){
  //   this.router.navigate("/profiles/" + profile.name)
  // }
}

import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'selenium-webdriver/firefox';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SelectService } from 'src/app/select.service';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfileItemComponent implements OnInit {
  @Input() profile: Profile;
  constructor(private router: Router, private selectServ: SelectService) { }

  navigateTo(username: string){
  
    // this.selectServ.selectedUsername.next(username);
    this.selectServ.selectedUsername.emit(username);
    this.router.navigate(['/profiles', username])
    // this.router.navigate(['/profilepage', username]);
  }

  navigateById(id: number){
  
    this.router.navigate(['/profiles', id])
  }
  ngOnInit() {
  }

  // navigateTo(profile: Profile){
  //   this.router.navigate("/profiles/" + profile.name)
  // }
}

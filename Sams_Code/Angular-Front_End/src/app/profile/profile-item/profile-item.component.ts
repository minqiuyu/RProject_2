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

  //redirects the user to the profile list component/profile-page component.
  //transmits the id of the selected user to make it available in the url params.
  navigateById(id: number){
    this.selectServ.foundUser = id;
    // this.router.navigate(['/profiles', id])
    this.router.navigate(['/profilepage'])
  }
  ngOnInit() {
  }

}

import { Component, OnInit, EventEmitter } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { ProfilesService } from 'src/app/profile/profiles.service';
import { Profile } from '../profile.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles: Profile[];
  selectedProfile = new EventEmitter<string>();

 
  constructor(private route: ActivatedRoute, private proService: ProfilesService, private router: Router) { }

  ngOnInit() {
    this.profiles = this.proService.getProfiles();
     this.proService.fetchProfilesFromDB().subscribe((data)=>{
     
      this.profiles = data;
      console.log("Profiles from API " + JSON.stringify(this.profiles))
    });

  }

  

}

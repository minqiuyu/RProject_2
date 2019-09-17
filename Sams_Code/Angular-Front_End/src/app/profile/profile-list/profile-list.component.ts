import { Component, OnInit, EventEmitter } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { ProfilesService } from 'src/app/profile/profiles.service';
import { Profile } from '../profile.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchProfileService } from 'src/app/fetch-profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  profiles: Profile[];
  selectedProfile = new EventEmitter<string>();

 
  constructor(private route: ActivatedRoute, private proService: ProfilesService,
    private fetchServ:FetchProfileService, private router: Router) { }

  ngOnInit() {
    this.profiles = this.proService.getProfiles();
     this.fetchServ.fetchProfilesFromDB().subscribe((data)=>{
     
      this.profiles = data;
    });

  }

  

}

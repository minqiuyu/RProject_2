import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../profile/profiles.service';
import { Profile } from '../profile/profile.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string; 
  profiles: Profile[];
  foundProfiles: Profile[] = []
  constructor(private proService: ProfilesService) { }
  searchForProfile(){
    console.log("Search term entered: " + this.searchTerm)
    this.foundProfiles = []
    for(let p of this.profiles){
      console.log("Looping through profiles " + p.getUsername())
      if(p.getUsername().includes(this.searchTerm)){
        // console.lo
        this.foundProfiles.push(p)
      }
    }
    console.log("Found profiles " + JSON.stringify(this.foundProfiles))
  }
  ngOnInit() {
    this.profiles = this.proService.getProfiles();
    console.log(this.profiles + " this profiles in search comp.")
  }

  
}

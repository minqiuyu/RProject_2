import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../profile/profiles.service';
import { Profile } from '../profile/profile.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchBy: any;
  searchTerm: string; 
  profiles: Profile[];
  foundProfiles: Profile[] = []
  constructor(private proService: ProfilesService) { }
  searchForProfile(){
    console.log("Search term entered: " + this.searchTerm)
    console.log("Search by is " + this.searchBy)
    this.foundProfiles = []
    for(let p of this.profiles){
      // console.log("Looping through profiles " + p.getUsername())
     switch(this.searchBy){
       case "username":
         if(p.getUsername().toLowerCase().includes(this.searchTerm.toLowerCase())){
           this.foundProfiles.push(p)
         }
         break;
      case "email":
          if(p.getEmail().toLowerCase().includes(this.searchTerm.toLowerCase())){
            this.foundProfiles.push(p)
          }
        break;
      case "firstName":
          if(p.getFirstName().toLowerCase().includes(this.searchTerm.toLowerCase())){
            this.foundProfiles.push(p)
          }
        break;
      case "lastName":
          if(p.getLastName().toLowerCase().includes(this.searchTerm.toLowerCase())){
            this.foundProfiles.push(p)
          }
        break;
     }
      }
  }
  ngOnInit() {
    this.profiles = this.proService.getProfiles();
    console.log(this.profiles + " this profiles in search comp.")
  }

  
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfilesService } from '../profile/profiles.service';
import { Profile } from '../profile/profile.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  //template driven form
  // @ViewChild('searchForm', {static: true}) searchForm: NgForm;

  searchForm: FormGroup;
  searchBy: any;
  searchTerm: string; 
  profiles: Profile[];
  foundProfiles: Profile[];
  noneFound: boolean;
  constructor(private proService: ProfilesService) { }

  noProfilesFound(){
    if(this.foundProfiles=== undefined || this.foundProfiles.length === 0){
      this.noneFound = true;
    }
    else {
      this.noneFound = false;
      console.log(this.foundProfiles==[])

    }
  }
  searchForProfile(f){
    console.log(this.searchForm);
    this.foundProfiles = []
    for(let p of this.profiles){
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

      this.noProfilesFound();
      this.searchForm.reset();
  }
  ngOnInit() {
    this.searchForm = new FormGroup({
      'searchCategory': new FormControl(null,Validators.required),
      'searchedTerm': new FormControl(null, Validators.required)
    })
    this.profiles = this.proService.getProfiles();
  }

  
}

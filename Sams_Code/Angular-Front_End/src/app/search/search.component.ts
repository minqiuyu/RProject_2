import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfilesService } from '../profile/profiles.service';
import { Profile } from '../profile/profile.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { FetchProfileService } from '../fetch-profile.service';

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
  profilesFound = new Subject<Profile[]>();
  noneFound: boolean;
  constructor(private fetchServ: FetchProfileService) { }
  // private proService: ProfilesService
  noProfilesFound(){
    if(this.profiles=== undefined || this.profiles.length === 0){
      this.noneFound = true;
    }
    else {
      this.noneFound = false;

    }
  }
  searchForProfile(f){
    console.log(this.searchForm.value);
    // this.proService.fetchMyProfile(1).subscribe((data)=>{
    //   console.log("My profile: " + data);
    // })
    this.profiles=[]
    switch(this.searchForm.value.searchCategory){ 
      case 'username':
        this.fetchServ.fetchProfileByUserName(this.searchForm.value.searchedTerm).subscribe((data)=>{
          this.profiles.push(data);
        })
        break;
      case 'email':
          this.fetchServ.fetchProfileByEmail(this.searchForm.value.searchedTerm).subscribe((data)=>{
            this.profiles.push(data);
            console.log("Data from fetch by email: " + data)
          })
          break;
          case 'firstName':
              this.fetchServ.fetchProfileByFirstName(this.searchForm.value.searchedTerm).subscribe((data)=>{
                this.profiles.push(data);
                console.log("Data from fetch by FN: " + data)
              })
              break;
      case 'userId':
        this.fetchServ.fetchProfileById(this.searchForm.value.searchedTerm).subscribe((data)=>{
          this.profiles.push(data);
          console.log(data)
          this.profilesFound.subscribe((data)=>{
            this.profiles = data;
          });
          console.log(this.profiles);
        });
    }
    
    // for(let p of this.profiles){
    //  switch(this.searchTerm){
    //    case "username":
    //      if(p.getUsername().toLowerCase().includes(this.searchTerm.toLowerCase())){
    //        this.foundProfiles.push(p)
    //      }
    //      break;
    //   case "email":
    //       if(p.getEmail().toLowerCase().includes(this.searchTerm.toLowerCase())){
    //         this.foundProfiles.push(p)
    //       }
    //     break;
    //   case "firstName":
    //       if(p.getFirstName().toLowerCase().includes(this.searchTerm.toLowerCase())){
    //         this.foundProfiles.push(p)
    //       }
    //     break;
    //   case "lastName":
    //       if(p.getLastName().toLowerCase().includes(this.searchTerm.toLowerCase())){
    //         this.foundProfiles.push(p)
    //       }
    //     break;
    //  }
    //   }

      // this.noProfilesFound();
      this.searchForm.reset();
  }
  ngOnInit() {
    this.searchForm = new FormGroup({
      'searchCategory': new FormControl(null,Validators.required),
      'searchedTerm': new FormControl(null, Validators.required)
    })

    // this.proService.fetchProfilesFromDB().subscribe((data)=>{
    //   this.profiles = data;
    // })
  }

  
}

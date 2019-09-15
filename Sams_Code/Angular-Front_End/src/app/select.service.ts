import { Injectable, EventEmitter } from '@angular/core';
import { ProfilesService } from './profile/profiles.service';
import { Subject, PartialObserver } from 'rxjs';
import { Profile } from './profile/profile.model';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  selectedProfile = new Subject<any>();
  selectedObs: PartialObserver<any>;
  selectedUsername = new EventEmitter<string>();
  constructor(private proServ: ProfilesService) { }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Profile } from './profile.model';

@Injectable()
export class ProfileService {

  constructor() {}

  public profile!: Profile;

  setProfile(profile: Profile) {
    this.profile = profile;
  }

  getProfile() {
    return this.profile;
  }
}

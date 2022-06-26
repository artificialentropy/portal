import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile!: Profile;
  constructor(private ds: DataStorageService,private profileService: ProfileService) { }

  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }
}


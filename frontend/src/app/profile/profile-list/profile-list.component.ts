import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Profile } from '../profile.model';
import * as fromApp from '../../reducers/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfilesListComponent implements OnInit {

  profiles: Profile[] = [];
  constructor(
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.store.select('profiles').subscribe((result) => {
      this.profiles = [];
      result.profiles.forEach(
        (profileItem) => {
          this.profiles.push(profileItem);
        })
    })

  }
}

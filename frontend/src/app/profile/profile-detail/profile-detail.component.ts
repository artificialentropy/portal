import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import * as fromApp from '../../reducers/index';
import { Profile } from '../profile.model';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfilesDetailComponent implements OnInit {
  profile: Profile;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => {
          return +params['id'];
        }),
        switchMap(id => {
          this.id = id;
          return this.store.select('profiles');
        }),
        map(profileState => {
          return profileState.profiles.find((profile, index) => {
            return index === this.id;
          });
        })
      )
      .subscribe(profile => {
        this.profile = profile;
      });
  }

}

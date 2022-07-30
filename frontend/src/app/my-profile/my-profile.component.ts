import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MyProfile } from './my-profile.model';
import * as fromApp from '../reducers/index';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  my_profile: MyProfile;
  constructor(
    private router: Router,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    this.store.select('my_profile').subscribe((result) => {
      console.log(result.my_profile.city)
      this.my_profile.id = result.my_profile.id;
      this.my_profile.first_name = result.my_profile.first_name;
      this.my_profile.last_name = result.my_profile.last_name;
      this.my_profile.phone_number = result.my_profile.phone_number;
      this.my_profile.city = result.my_profile.city;
      this.my_profile.avatar = result.my_profile.avatar;
    })
  }

}

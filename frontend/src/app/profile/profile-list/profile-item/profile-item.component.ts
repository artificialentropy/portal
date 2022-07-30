import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../profile.model';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.css']
})
export class ProfilesItemComponent implements OnInit {
  @Input() profile: Profile;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}

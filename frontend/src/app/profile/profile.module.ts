import {NgModule} from '@angular/core';
import { ProfilesRoutingModule } from './profile-routing.module';
import { ProfilesComponent } from './profile.component';
import { ProfilesItemComponent } from './profile-list/profile-item/profile-item.component';
import { ProfilesDetailComponent } from './profile-detail/profile-detail.component';
import { ProfilesListComponent } from './profile-list/profile-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProfilesComponent,
    ProfilesListComponent,
    ProfilesItemComponent,
    ProfilesDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProfilesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]}
)
export class ProfilesModule {}

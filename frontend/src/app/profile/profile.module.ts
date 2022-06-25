
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';



@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ],
})
export class ProfileModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ProfilesDetailComponent } from './profile-detail/profile-detail.component';
import { ProfilesResolverService } from './profile-resolver.service';
import { ProfilesComponent } from './profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        component: ProfilesDetailComponent,
        resolve: [ProfilesResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesRoutingModule {}

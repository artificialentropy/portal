import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobResolverService } from './job-resolver.service';
import { JobStartComponent } from './job-start/job-start.component';
import { JobComponent } from './job.component';

const routes: Routes = [
  {
    path: '',
    component: JobComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: JobStartComponent },
      {
        path: ':id',
        component: JobDetailComponent,
        resolve: [JobResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyStartComponent } from './company-start/company-start.component';
import { CompanyComponent } from './company.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CompanyStartComponent },
      {
        path: ':id',
        component: CompanyDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {}

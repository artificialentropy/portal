import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyResolverService } from './company-resolver.service';
import { CompanyStartComponent } from './company-start/company-start.component';
import { CompanyComponent } from './company.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    children: [
      { path: '', component: CompanyStartComponent },
      {
        path: ':id',
        component: CompanyDetailComponent,
        resolve: [CompanyResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {}


import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyItemComponent } from './company-list/company-item/company-item.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyStartComponent } from './company-start/company-start.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    CompanyItemComponent,
    CompanyDetailComponent,
    CompanyStartComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CompanyRoutingModule,
    CommonModule
  ],
})
export class CompanyModule { }

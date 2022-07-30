import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyItemComponent } from './company-list/company-item/company-item.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyStartComponent } from './company-start/company-start.component';
import { SharedModule } from '../shared/shared.module';
import { CompanyRoutingModule } from './company-routing.module';



@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    CompanyItemComponent,
    CompanyDetailComponent,
    CompanyStartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CompanyRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]}
)
export class CompanyModule {}

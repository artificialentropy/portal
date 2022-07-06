import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, Routes} from '@angular/router';
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
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ]}
)
export class CompanyModule {}

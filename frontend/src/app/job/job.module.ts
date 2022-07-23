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
import { SharedModule } from '../shared/shared.module';
import { JobComponent } from './job.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobItemComponent } from './job-list/job-item/job-item.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobStartComponent } from './job-start/job-start.component';
import { JobRoutingModule } from './job-routing.module';



@NgModule({
  declarations: [
    JobComponent,
    JobListComponent,
    JobItemComponent,
    JobDetailComponent,
    JobStartComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    JobRoutingModule,
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
export class JobModule {}

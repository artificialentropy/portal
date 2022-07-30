import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
    ReactiveFormsModule
  ]}
)
export class JobModule {}


import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { JobComponent } from './job.component';
import { JobRoutingModule } from './job-routing.module';



@NgModule({
  declarations: [
    JobComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    JobRoutingModule
  ],
})
export class JobModule { }

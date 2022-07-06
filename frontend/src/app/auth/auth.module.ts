import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule,
      RouterModule.forChild([{path: '', component: AuthComponent}]),
      SharedModule
  ]
})
export class AuthModule {}

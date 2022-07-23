import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { Job } from '../job.model';
import * as fromApp from '../../reducers/index';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  constructor(
    private router: Router,
    private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('jobs').subscribe((result) => {
      this.jobs = [];
      result.jobs.forEach(
        (jobItem) => {
          this.jobs.push(jobItem)
        })
    })

  }

}

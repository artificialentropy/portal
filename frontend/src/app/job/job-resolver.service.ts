import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromApp from '../reducers/index';
import { Job } from './job.model';
import * as JobActions from './store/job.actions';

@Injectable({ providedIn: 'root' })
export class JobResolverService implements Resolve<Job[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.dataStorageService.fetchRecipes();
    return this.store.select('jobs').pipe(
      take(1),
      map(jobState => {
        return jobState.jobs;
      }),
      switchMap(jobs => {
        if (jobs.length === 0) {
          this.store.dispatch(new JobActions.FetchJobs());
          return this.actions$.pipe(
            ofType(JobActions.SET_JOBS),
            take(1)
          );
        } else {
          return of(jobs);
        }
      })
    );
  }
}

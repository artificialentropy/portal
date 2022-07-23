import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import * as JobsActions from './job.actions';
import * as fromApp from '../../reducers/index';
import { User } from 'src/app/auth/model/user.model';
import { Job } from '../job.model';

@Injectable()
export class JobEffects {
  user: User;
  token_object: string;

  @Effect()
  fetchJobs = this.actions$.pipe(
    ofType(JobsActions.FETCH_JOBS),
    switchMap(() => {
      this.store.select('auth').subscribe(authData => {
        this.token_object = authData.user.token;
      });
      let headers_object = new HttpHeaders().set("Authorization", "Token " + this.token_object);
      let httpOptions = {
        'Content-Type': 'application/json',
        headers: headers_object
      };
      return this.http.get<Job[]>(
        'http://localhost:8000/api/jobs/',
        httpOptions
      );
    }),
    map(jobs => {
      return jobs.map(job => {
        return {
          ...job
        };
      });
    }),
    map(jobs => {
      console.log(jobs);
      return new JobsActions.SetJobs(jobs);
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import * as CompanyActions from './company.actions';
import { Company } from '../model/company.model';
import * as fromApp from '../../reducers/index';
import { User } from 'src/app/auth/model/user.model';

@Injectable()
export class CompanyEffects {
  user: User;
  @Effect()
  fetchCompanies = this.actions$.pipe(
    ofType(CompanyActions.FETCH_COMPANY),
    switchMap(() => {
      return this.http.get<Company[]>(
        'http://localhost:8000/api/company/'
      );
    }),
    map(companies => {
      return companies.map(company => {
        return {
          ...company
        };
      });
    }),
    map(companies => {
      return new CompanyActions.SetCompanies(companies);
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}

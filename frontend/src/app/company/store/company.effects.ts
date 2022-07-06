import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import * as CompanyActions from './company.actions';
import { Company } from '../model/company.model';
import * as fromApp from '../../reducers/index';

@Injectable()
export class CompanyEffects {
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

  // @Effect({dispatch: false})
  // storeRecipes = this.actions$.pipe(
  //   ofType(CompanyActions.STORE_RECIPES),
  //   withLatestFrom(this.store.select('recipes')),
  //   switchMap(([actionData, recipesState]) => {
  //     return this.http.put(
  //       'https://angularbackend-9ffc2-default-rtdb.firebaseio.com/recipes.json',
  //       recipesState.recipes
  //     );
  //   })
  // );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}

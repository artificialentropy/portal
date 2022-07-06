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
import { Company } from './model/company.model';
import * as fromApp from '../reducers/index';
import * as CompanyActions from './store/company.actions';

@Injectable({ providedIn: 'root' })
export class CompanyResolverService implements Resolve<Company[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return this.dataStorageService.fetchRecipes();
    return this.store.select('companies').pipe(
      take(1),
      map(CompanyState => {
        return CompanyState.companies;
      }),
      switchMap(companies => {
        if (companies.length === 0) {
          this.store.dispatch(new CompanyActions.FetchCompanies());
          return this.actions$.pipe(
            ofType(CompanyActions.SET_COMPANY),
            take(1)
          );
        } else {
          return of(companies);
        }
      })
    );
  }
}

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
import { Profile } from './profile.model';
import * as ProfilesActions from './store/profile.actions';

@Injectable({ providedIn: 'root' })
export class ProfilesResolverService implements Resolve<Profile[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('profiles').pipe(
      take(1),
      map(profileState => {
        return profileState.profiles;
      }),
      switchMap(profiles => {
        if (profiles.length === 0) {
          this.store.dispatch(new ProfilesActions.FetchProfiles());
          return this.actions$.pipe(
            ofType(ProfilesActions.SET_PROFILES),
            take(1)
          );
        } else {
          return of(profiles);
        }
      })
    );
  }
}

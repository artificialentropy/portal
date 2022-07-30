import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import * as ProfilesActions from './profile.actions';
import * as fromApp from '../../reducers/index';
import { User } from 'src/app/auth/model/user.model';
import { Profile } from '../profile.model';

@Injectable()
export class ProfilesEffects {
  user: User;
  token_object: string;

  @Effect()
  fetchProfiles = this.actions$.pipe(
    ofType(ProfilesActions.FETCH_PROFILES),
    switchMap(() => {
      this.store.select('auth').subscribe(authData => {
        this.token_object = authData.user.token;
      });
      let headers_object = new HttpHeaders().set("Authorization", "Token " + this.token_object);
      let httpOptions = {
        'Content-Type': 'application/json',
        headers: headers_object
      };
      return this.http.get<Profile[]>(
        'http://localhost:8000/profile/profiles/',
        httpOptions
      );
    }),
    map(profiles => {
      return profiles.map(profile => {
        return {
          ...profile
        };
      });
    }),
    map(profiles => {
      return new ProfilesActions.SetProfiles(profiles);
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}

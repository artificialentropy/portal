import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import * as MyProfileActions from './my-profile.actions';
import * as fromApp from '../../reducers/index';
import { User } from 'src/app/auth/model/user.model';
import { MyProfile } from '../my-profile.model';

@Injectable()
export class MyProfileEffects {
  user: User;
  token_object: string;

  @Effect()
  fetchMyProfile = this.actions$.pipe(
    ofType(MyProfileActions.FETCH_MYPROFILE),
    switchMap(() => {
      this.store.select('auth').subscribe(authData => {
        this.token_object = authData.user.token;
      });
      let headers_object = new HttpHeaders().set("Authorization", "Token " + this.token_object);
      let httpOptions = {
        'Content-Type': 'application/json',
        headers: headers_object
      };
      return this.http.get<MyProfile>(
        'http://localhost:8000/profile/my_profile/',
        httpOptions
      );
    }),
    map(profile => {
      return new MyProfileActions.SetMyProfile(profile);
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}

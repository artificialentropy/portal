import { Action } from '@ngrx/store';
import { MyProfile } from '../my-profile.model';

export const SET_MYPROFILE = '[Profile] Set MyProfile';
export const FETCH_MYPROFILE = '[Profile] Fetch MyProfile';

export class SetMyProfile implements Action {
  readonly type = SET_MYPROFILE;
  constructor(public payload: MyProfile) {}
}

export class FetchMyProfile implements Action {
  readonly type = FETCH_MYPROFILE;
}

export type MyProfileAction =
  | SetMyProfile
  | FetchMyProfile

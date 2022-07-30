import { Action } from '@ngrx/store';
import { Profile } from '../profile.model';

export const SET_PROFILES = '[Profiles] Set Profiles';
export const FETCH_PROFILES = '[Profiles] Fetch Profiles';

export class SetProfiles implements Action {
  readonly type = SET_PROFILES;
  constructor(public payload: Profile[]) {}
}

export class FetchProfiles implements Action {
  readonly type = FETCH_PROFILES;
}

export type ProfilesActions =
  | SetProfiles
  | FetchProfiles

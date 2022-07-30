
import * as ProfilesActions from './profile.actions';
import { Profile } from '../profile.model';

export interface State {
  profiles: Profile[];
}

const initialState: State = {
  profiles: []
};

export function ProfilesReducer(
  state = initialState,
  action: ProfilesActions.ProfilesActions
) {
  switch (action.type) {
    case ProfilesActions.SET_PROFILES:
      return {
        ...state,
        profiles: [...action.payload]
      };
    case ProfilesActions.FETCH_PROFILES:
      return {
        ...state,
        profiles: [...state.profiles]
      };
    default:
      return state;
  }
}

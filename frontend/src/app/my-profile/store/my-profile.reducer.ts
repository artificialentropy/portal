import { MyProfile } from "../my-profile.model";
import * as MyProfileAction from './my-profile.actions';


export interface State {
  my_profile: MyProfile;
}

const initialState: State = {
  my_profile: undefined
};

export function MyProfileReducer(
  state = initialState,
  action: MyProfileAction.MyProfileAction
) {
  switch (action.type) {
    case MyProfileAction.SET_MYPROFILE:
      return {
        ...state,
        my_profile: action.payload
      };
    default:
      return state;
  }
}

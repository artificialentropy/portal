import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../auth/reducers/index';
import * as fromJobs from '../job/store/job.reducer';
import * as fromProfiles from '../profile/store/profile.reducer';
import * as fromCompany from '../company/store/company.reducer';
import * as fromMyProfile from '../my-profile/store/my-profile.reducer';

export interface AppState {
  auth: fromAuth.State;
  companies: fromCompany.State;
  jobs: fromJobs.State;
  profiles: fromProfiles.State;
  my_profile: fromMyProfile.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  companies: fromCompany.CompanyReducer,
  jobs: fromJobs.JobReducer,
  profiles: fromProfiles.ProfilesReducer,
  my_profile: fromMyProfile.MyProfileReducer
};

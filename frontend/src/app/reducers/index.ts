import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../auth/reducers/index';
import * as fromJobs from '../job/store/job.reducer';
import * as fromCompany from '../company/store/company.reducer';
export interface AppState {
  auth: fromAuth.State;
  companies: fromCompany.State;
  jobs: fromJobs.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  companies: fromCompany.CompanyReducer,
  jobs: fromJobs.JobReducer
};

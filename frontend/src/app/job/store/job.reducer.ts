
import { Job } from '../job.model';
import * as JobActions from './job.actions';

export interface State {
  jobs: Job[];
}

const initialState: State = {
  jobs: []
};

export function JobReducer(
  state = initialState,
  action: JobActions.JobActions
) {
  switch (action.type) {
    case JobActions.SET_JOBS:
      return {
        ...state,
        jobs: [...action.payload]
      };
    case JobActions.ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
    case JobActions.UPDATE_JOB:
      const updatedJob = {
        ...state.jobs[action.payload.index],
        ...action.payload.newJob
      };

      const updatedJobs = [...state.jobs];
      updatedJobs[action.payload.index] = updatedJob;

      return {
        ...state,
        jobs: updatedJobs
      };
    case JobActions.DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((job, index) => {
          return index !== action.payload;
        })
      };
    default:
      return state;
  }
}

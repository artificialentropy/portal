import { Action } from '@ngrx/store';
import { Job } from '../job.model';


export const SET_JOBS = '[Jobs] Set Jobs';
export const FETCH_JOBS = '[Jobs] Fetch Jobs';
export const ADD_JOB = '[Jobs] Add Job';
export const UPDATE_JOB = '[Jobs] Update Job';
export const DELETE_JOB = '[Jobs] Delete Job';
export const STORE_JOBS = '[Jobs] Store Job';

export class SetJobs implements Action {
  readonly type = SET_JOBS;

  constructor(public payload: Job[]) {}
}

export class FetchJobs implements Action {
  readonly type = FETCH_JOBS;
}

export class AddJob implements Action {
  readonly type = ADD_JOB;

  constructor(public payload: Job) {}
}

export class UpdateJob implements Action {
  readonly type = UPDATE_JOB;

  constructor(public payload: { index: number; newJob: Job }) {}
}

export class DeleteJob implements Action {
  readonly type = DELETE_JOB;

  constructor(public payload: number) {}
}

export class StoreJobs implements Action {
  readonly type = STORE_JOBS;
}

export type JobActions =
  | SetJobs
  | FetchJobs
  | AddJob
  | UpdateJob
  | DeleteJob
  | StoreJobs;

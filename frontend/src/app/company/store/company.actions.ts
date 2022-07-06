import { Action } from '@ngrx/store';
import { Company } from '../model/company.model';


export const SET_COMPANY = '[Companies] Set Companies';
export const FETCH_COMPANY = '[Companies] Fetch Companies';
export const ADD_COMPANY = '[Companies] Add Companies';
export const UPDATE_COMPANY = '[Companies] Update Companies';
export const DELETE_COMPANY = '[Companies] Delete Companies';
export const STORE_COMPANY = '[Companies] Store Companies';

export class SetCompanies implements Action {
  readonly type = SET_COMPANY;

  constructor(public payload: Company[]) {}
}

export class FetchCompanies implements Action {
  readonly type = FETCH_COMPANY;
}

export class AddCompany implements Action {
  readonly type = ADD_COMPANY;

  constructor(public payload: Company) {}
}

export class UpdateCompany implements Action {
  readonly type = UPDATE_COMPANY;

  constructor(public payload: { index: number; newCompany: Company }) {}
}

export class DeleteCompany implements Action {
  readonly type = DELETE_COMPANY;

  constructor(public payload: number) {}
}

export class StoreCompanies implements Action {
  readonly type = STORE_COMPANY;
}

export type CompanyActions =
  | SetCompanies
  | FetchCompanies
  | AddCompany
  | UpdateCompany
  | DeleteCompany
  | StoreCompanies;

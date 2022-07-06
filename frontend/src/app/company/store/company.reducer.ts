import { Company } from '../model/company.model';
import * as CompanyAction from './company.actions';

export interface State {
  companies: Company[];
}

const initialState: State = {
  companies: []
};

export function CompanyReducer(
  state = initialState,
  action: CompanyAction.CompanyActions
) {
  switch (action.type) {
    case CompanyAction.SET_COMPANY:
      return {
        ...state,
        companies: [...action.payload]
      };
    case CompanyAction.ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.payload]
      };
    case CompanyAction.UPDATE_COMPANY:
      const updatedCompany = {
        ...state.companies[action.payload.index],
        ...action.payload.newCompany
      };

      const updatedCompanies = [...state.companies];
      updatedCompanies[action.payload.index] = updatedCompany;

      return {
        ...state,
        companies: updatedCompanies
      };
    case CompanyAction.DELETE_COMPANY:
      return {
        ...state,
        companies: state.companies.filter((company, index) => {
          return index !== action.payload;
        })
      };
    default:
      return state;
  }
}

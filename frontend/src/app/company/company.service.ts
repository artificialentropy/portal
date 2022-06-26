import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { Company } from './company.model';

@Injectable()
export class CompanyService {

  companiesChanged = new Subject<Company[]>();

  constructor() {}

  public companies: Company[] = [];

  setCompanies(companies: Company[]) {
    this.companies = companies;
    this.companiesChanged.next(this.companies.slice());
  }

  getCompanies() {
    return this.companies.slice();
  }

  getCompany(index: number) {
    return this.companies[index];
  }
}

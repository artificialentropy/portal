import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Company } from './company.model';
import { CompanyService } from './company.service';

@Injectable({ providedIn: 'root' })
export class ImagesResolverService implements Resolve<Company[]> {
  constructor(
    private companyService: CompanyService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const companies = this.companyService.getCompanies();
    if (companies.length === 0) {
      return this.companyService.getCompanies();
    } else {
      return companies;
    }
  }
}

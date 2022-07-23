import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, pipe, Subscription } from 'rxjs';
import { Company } from '../model/company.model';
import * as fromApp from '../../reducers/index';
import { FetchCompanies } from '../store/company.actions';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[] = [];

  constructor(
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.store.select('companies').subscribe((result) => {
      this.companies = [];
      result.companies.forEach(
        (companyItem) => {
          this.companies.push(companyItem)
        })
    })

  }

}

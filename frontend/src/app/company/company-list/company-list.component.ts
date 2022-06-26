import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  subscription!: Subscription;
  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.subscription = this.companyService.companiesChanged
      .subscribe(
        (companies: Company[]) => {
          this.companies = companies;
        }
      );
    this.companies = this.companyService.getCompanies();
  }

}

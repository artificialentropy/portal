import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private ds: DataStorageService) { }

  ngOnInit() {
    if (this.ds.firstLoad) {
      this.ds.fetchCompanies().subscribe();
      this.ds.firstLoad = false;
    }
  }

}

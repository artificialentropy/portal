import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Company } from '../company/company.model';
import { CompanyService } from '../company/company.service';
@Injectable({ providedIn: 'root' })

export class DataStorageService {
  public companies: Company[] = []
  public token = localStorage.getItem('access');
  firstLoad = true;
  private basecompanyURL = `http://localhost:8000/api/company/`
  constructor(private http: HttpClient,private companyService: CompanyService) {
  }

  fetchCompanies() {
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    const httpOptions = {
      headers: headers_object
    };
    return this.http
      .get<Company[]>(
        this.basecompanyURL,
        httpOptions
      )
      .pipe(
        map(companies => {
          return companies.map(company => {
            return {
              ...company
            };
          });
        }),
        tap(companies => {
          this.companyService.setCompanies(companies);
          console.log(companies);

        })
      );
  }

}

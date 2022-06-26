import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Company } from '../company/company.model';
import { CompanyService } from '../company/company.service';
import { Profile } from '../profile/profile.model';
import { ProfileService } from '../profile/profile.service';
@Injectable({ providedIn: 'root' })

export class DataStorageService {
  public companies: Company[] = []
  public profile!: Profile;
  public token = localStorage.getItem('access');
  firstLoad = true;
  private basecompanyURL = `http://localhost:8000/api/company/`
  private baseprofileURL = `http://localhost:8000/api/profile/`
  constructor(private http: HttpClient,private companyService: CompanyService,private profileService:ProfileService) {
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
        })
      );
  }


  fetchProfile() {
    var user : any;
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.token);
    const httpOptions = {
      headers: headers_object
    };
    this.http.get(`http://localhost:8000/api/auth/me/`,httpOptions).subscribe((data) => {
      user = data;
      }
    )
    this.http.get<Profile[]>(this.baseprofileURL,httpOptions).subscribe((data: Profile[]) => {
      data.forEach( (profile) => {
        if (profile.user === user.id) {
          this.profileService.setProfile(profile);
            }
          }
        )
      }
    );
  }
}

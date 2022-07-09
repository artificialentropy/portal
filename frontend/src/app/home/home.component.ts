import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import { Company } from '../company/model/company.model';
import * as CompanyActions from '../company/store/company.actions';
import * as fromApp from '../reducers/index';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  companies: Company[];
  subscription: Subscription;
  token = "";
  public isAuthenticated: boolean = false;
  constructor(
    private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    // this.store.select('auth').subscribe((result)=> {
    //   if (result.user.token){
    //     this.token = result.user.token;
    //     this.isAuthenticated=true
    //   } else {
    //     return;
    //   }
    // });

  }


}

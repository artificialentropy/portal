import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromApp from '../reducers/index';
import * as AuthActions from '../auth/action-types';
import * as CompanyActions from '../company/store/company.actions';
import * as JobActions from '../job/store/job.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.userSub = this.store
      .select('auth')
      .pipe(map(authState => authState.user))
      .subscribe(user => {
        this.isAuthenticated = !!user;
        console.log(!user);
        console.log(!!user);
      });
  }

  onFetchCompanyData() {
    this.store.dispatch(new CompanyActions.FetchCompanies());
  }
  onFetchJobData() {
    this.store.dispatch(new JobActions.FetchJobs());
  }
  onLogout() {
    this.store.dispatch(new AuthActions.AuthActions.Logout());
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}

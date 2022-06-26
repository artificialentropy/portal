import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public user: any;
  public timeleft: any;
  constructor(public authService: AuthService,private router: Router) { }
  isLoginMode = true;
  ngOnInit() {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
  const email = form.value.email;
  const password = form.value.password;

  let authObs: Observable<AuthResponseData>;

  if (this.isLoginMode) {
    authObs = this.authService.login(email, password);
  } else {
    authObs = this.authService.signup(email, password);
  }

  authObs.subscribe(
    resData => {
      this.router.navigate(['/']);
    },
    errorMessage => {
      console.log(errorMessage);
    }
  );

  form.reset();
  }

  refreshToken() {
    this.authService.refreshAPIToken();
  }

  logout() {
    this.authService.logout();
  }
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface AuthResponseData {
  access: string;
  refresh: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user:BehaviorSubject<User> = new BehaviorSubject<User>(null!);

  // http options used for making API calls
  private httpOptions: any;

  // the actual JWT token
  public accessToken!: string;
  public refreshToken!: string;

  // the token expiration date
  public token_expires: Date = new Date();

  // error messages received from the login attempt
  public errors: any = [];

  constructor(private http: HttpClient,private router: Router) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'http://localhost:8000/auth/create/',
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(resData.access,resData.refresh)
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'http://localhost:8000/auth/token/',
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(resData.access,resData.refresh)
        })
      );
  }

  logout() {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    this.router.navigate(['/auth']);
  }

  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshAPIToken() {
    this.http.post<AuthResponseData>(
      'http://localhost:8000/auth/refresh/',
      {
        refresh: localStorage.getItem('refresh'),
        returnSecureToken: true
      }
    )
    .pipe(
      tap(
        resData => {
          this.updateData(resData.access,resData.refresh);
        },
        err => {
          this.errors = err['error'];
        }
      )

    );
  }

  private updateData(accessToken: string,refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.errors = [];
    const token_parts = this.accessToken.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }

  private handleAuthentication(
    access: string,
    refresh: string
  ) {
    const user = new User(access);
    this.user.next(user);
    localStorage.setItem('access', access.replace(/"/g, ''));
    localStorage.setItem('refresh', refresh.replace(/"/g, ''));
    const token_parts = access.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
  }



}

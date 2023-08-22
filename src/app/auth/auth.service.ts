import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';
import { Path } from '../shared';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User | null>(null); // we have access to previously emitted value, without subscription
  private tokenExpirationTimer?: NodeJS.Timeout;

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        // link from Firebase REST API docs
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYYHrQbbkTTEleoSXoNSUXmt1ajHuRFQs', // Web API Key from my Firebase Project Settings
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(this.handleAuthentication.bind(this))
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCYYHrQbbkTTEleoSXoNSUXmt1ajHuRFQs',
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap(this.handleAuthentication.bind(this))
      );
  }

  autoLogin() {
    const userData = localStorage.getItem('userData');

    if (!userData) return;

    const parsedUserData = <
      Pick<User, 'email' | 'id'> & {
        _token: string;
        _tokenExpirationDate: string;
      }
    >JSON.parse(userData);

    const { email, id, _token, _tokenExpirationDate } = parsedUserData;

    const loadedUser = new User(
      email,
      id,
      _token,
      new Date(_tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(_tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate([`/${Path.Auth}`]);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = undefined;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication({
    email,
    localId,
    idToken,
    expiresIn,
  }: AuthResponseData) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, localId, idToken, expirationDate);
    this.user.next(user);
    this.autoLogout(+expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';

    if (!errorRes.error.error) {
      return throwError(() => new Error(errorMessage));
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage =
          'There is no user record corresponding to this identifier. The user may have been deleted.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage =
          'The password is invalid or the user does not have a password.';
        break;
      case 'USER_DISABLED':
        errorMessage =
          'The user account has been disabled by an administrator.';
        break;
      default:
        break;
    }

    return throwError(() => new Error(errorMessage));
  }
}

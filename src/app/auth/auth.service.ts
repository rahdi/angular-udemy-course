import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

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
        catchError((errorRes) => {
          let errorMessage = 'An unknown error occured!';

          if (!errorRes.error.error) {
            return throwError(() => new Error(errorMessage));
          }

          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email exists already';
              break;
            default:
              break;
          }

          return throwError(() => new Error(errorMessage));
        })
      );
  }
}

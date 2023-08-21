import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.post<AuthResponseData>(
      // link from Firebase REST API docs
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCYYHrQbbkTTEleoSXoNSUXmt1ajHuRFQs', // Web API Key from my Firebase Project Settings
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }
}

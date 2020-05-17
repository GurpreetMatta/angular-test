import { UserModel } from './../_models/user.model';
import { JwtHelper } from 'angular2-jwt';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }

  login(credentials) {
    return this.http.post(`${environment.apiEndpoint}/api/auth/login`, credentials).pipe(map(response => {
      const result: UserModel = response.json();
      console.log(result);
      if (result.accessToken) {
        localStorage.setItem('token', result.accessToken);
        localStorage.setItem('user', JSON.stringify(result));
        return true;
      }
      return false;
    }), catchError(this.errorHandler));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelper();
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return !jwtHelper.isTokenExpired(token);
  }

  currentUser() {
      return localStorage.getItem('user');
  }

  errorHandler(error: Response) {

    if (error.status === 401) {
      return throwError('unauthorized');
    }

    return throwError('server error.');

  }


}

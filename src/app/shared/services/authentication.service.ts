import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // URL_USUARIOS = 'http://localhost:3000/users'

  constructor(
    private router: Router,
    private http: HttpClient
  ) {

  }

  login(username: string, password: string) {
    return this.http.post<any>(`/users/authenticate`, { username, password })
      .pipe(map(user => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        user = window.btoa(username + ':' + password);
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    // this.userSubject.next(null);
    this.router.navigate(['/']);
  }
}

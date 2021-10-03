import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject : BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.userSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('safiriUser')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value!;
  }

  addData(user: User) {
    localStorage.setItem('safiriUser', JSON.stringify(user));
    this.userSubject.next(null);
    this.userSubject.next(user);
  }

  updateUserData(user: User) {
    localStorage.removeItem('safiriUser');
    localStorage.setItem('safiriUser', JSON.stringify(user));
    this.userSubject.next(null);
    this.userSubject.next(user);
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('safiriUser');
    this.userSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  register(formData: any) {
    return this.http.post(`${environment.apiUrl}auth/register`, formData, {observe: 'response'});
  }

  addAccount(formData: any) {
    return this.http.post(`${environment.apiUrl}account`, formData, {observe: 'response'});
  }

  login(formData: any) {
    return this.http.post(`${environment.apiUrl}auth/login`, formData, {observe: 'response'});
  }

}

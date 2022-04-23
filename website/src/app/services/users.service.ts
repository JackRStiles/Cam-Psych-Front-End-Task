import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Items } from '../intefaces/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseURL = 'http://localhost:8080/';
  size = 5;
  page = 0;
  pages = 0;


  constructor(private http: HttpClient) {}

  getUsers(): Observable<Items> {
    return this.http.get<Items>(
      `${this.baseURL}users?size=${this.size}&page=${this.page}`
    );
  }

  getAllUsers(): Observable<Items> {
    return this.http.get<Items>(
      `${this.baseURL}users`
    );
  }
}

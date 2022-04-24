import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap, retry, tap } from 'rxjs/operators';
import { Items, User } from '../intefaces/users';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})

export class UsersService {
  baseURL = 'http://localhost:8080/';
  size = 20;

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  constructor(private http: HttpClient) {}

  getUsers(size: Number, page: Number): Observable<Items> {
    return this.http.get<Items>(
      `${this.baseURL}users?size=${size}&page=${page}`
    );
  }

  getAllUsers(): Observable<Items> {
    return this.http.get<Items>(`${this.baseURL}users`);
  }

  // TODO Work out why this doesn't work!
  addUser(user: User): Observable<any> {
    return this.http.post(`${this.baseURL}users`, user, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteUser(id: number): Observable<unknown>{
    return this.http.delete(`${this.baseURL}users/${id}`, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FakejsonService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }
  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getFolder(): Observable<any> {
    const url1 = `${this.REST_API_SERVER}/folder`;
    return this.httpClient
      .get<any>(url1, this.httpOptions)
      .pipe(catchError(this.handleError))
  }

  public getFile(): Observable<any> {
    const url2 = `${this.REST_API_SERVER}/files`;
    return this.httpClient
      .get<any>(url2, this.httpOptions)
      .pipe(catchError(this.handleError))
  }

  public getIcons(): Observable<any> {
    const url3 = `${this.REST_API_SERVER}/iconFiles`;
    return this.httpClient
      .get<any>(url3, this.httpOptions)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    return throwError('Something bad happened; Please try again later.');
  }


}

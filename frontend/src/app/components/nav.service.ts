import { ErrorHandler } from './../app.error-handler';
import { Nav } from './nav.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  baseUrl = "http://localhost:3001/menus";

  constructor(private http: HttpClient) { }

  read(): Observable<Nav[]> {
    return this.http.get<Nav[]>(this.baseUrl).pipe(
      map(object => object),
      catchError(ErrorHandler.errorHandler)
      );
  }
}

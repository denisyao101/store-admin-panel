import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'

import {MonthlySales} from '../models/monthly-sales'

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private salesUrl = '/assets/data/sales.json';

  constructor(private http: HttpClient) { }

  getSalesByMonth(): Observable<MonthlySales[]>{
    console.log('call sales service')
    return this.http.get<MonthlySales[]>(this.salesUrl).pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse){
    return throwError(`An error occurred: ${err}`);
  }
}

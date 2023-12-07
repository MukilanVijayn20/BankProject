import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoanService {
  constructor(private http: HttpClient) {}

  postLoan(data: any) {
    return this.http.post<any>('http://localhost:8080/loan-app/allLoan', data);
  }

  getLoan() {
    return this.http.get<any>('http://localhost:8080/loan-app/allLoan');
  }
}

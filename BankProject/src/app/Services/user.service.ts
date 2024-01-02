import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../Models/user.model';
import { LoanEligibility } from '../Models/loanEligibility.model';
import { personalLoan } from '../Models/personalLoan.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  postUser(data:User){
    return this.http.post<User>("http://localhost:8080/user",data);
  }
  
  getUser(){
    return this.http.get<User>("http://localhost:8080/user");
  }
  
  geteligibility(data:string){
    return this.http.get<LoanEligibility>("http://localhost:8080/eligibility/"+data);
  }

  addLoanByUser(data:personalLoan,id:number){
    return this.http.post<any>("http://localhost:8080/addLoan/"+id,data);
  }

  getUserById(id:number){
    return this.http.get<User>("http://localhost:8080/user/id/"+id);
  }
}

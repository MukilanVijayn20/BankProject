import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  postUser(data:any){
    return this.http.post<any>("http://localhost:8080/user",data);
  }

  getUser(){
    return this.http.get<User>("http://localhost:8080/user");
  }
}

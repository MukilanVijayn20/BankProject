import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import { Employee } from '../Models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  loggedIn: boolean = false;

  userLogin: boolean = false;

  employeeLogin: boolean = false;

  homeloanContact: boolean = false;

  currentUser: User | null = null;

  currentEmployee!: Employee;

  constructor() {}
}

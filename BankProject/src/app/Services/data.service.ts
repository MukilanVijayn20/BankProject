import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    loggedIn:boolean=false;

    homeloanContact:boolean=false;

    currentUser:User | undefined;
    
    constructor(){}
}
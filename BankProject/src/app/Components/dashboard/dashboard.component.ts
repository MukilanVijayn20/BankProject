import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(private data: DataService,private router:Router) {}

  ngOnInit() {
    this.loggedIn = this.data.loggedIn;
  }

  logOut() {
    this.data.currentUser = undefined;
    this.data.loggedIn = false;
    console.log('logout success');
    alert('logged Out Successfully');
    this.ngOnInit();
  }
}

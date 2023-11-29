import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(private data: DataService, private router: Router) {}

  ngOnInit() {
    this.loggedIn = this.data.loggedIn;
  }

  logOut() {
    this.data.currentUser = undefined;
    this.data.loggedIn = false;
    console.log('logout success');
    alert('logged Out Successfully');
    this.ngOnInit();
    this.router.navigate(['/'])
  }
}

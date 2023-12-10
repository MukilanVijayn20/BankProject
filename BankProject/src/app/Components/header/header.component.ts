import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(private data: DataService, private router: Router,private snackBar:MatSnackBar) {}

  ngOnInit() {
    this.loggedIn = this.data.loggedIn;
  }

  logOut() {
    this.data.currentUser = undefined;
    this.data.loggedIn = false;
    console.log('logout success');
    this.snackBar.open('Logged out Successfully', 'Close', {
      duration: 3000, // Duration in milliseconds
      horizontalPosition: 'center', // Positioning
      verticalPosition: 'top',
    });
    this.ngOnInit();
    this.router.navigate(['/']);
  }

  
}

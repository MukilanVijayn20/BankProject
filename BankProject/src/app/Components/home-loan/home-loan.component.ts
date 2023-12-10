import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-home-loan',
  templateUrl: './home-loan.component.html',
  styleUrls: ['./home-loan.component.css'],
})
export class HomeLoanComponent implements OnInit {
  constructor(private data:DataService,private router:Router) {}

  ngOnInit() {
    if(!this.data.loggedIn){
      this.router.navigate(['']);
    }
  }
}

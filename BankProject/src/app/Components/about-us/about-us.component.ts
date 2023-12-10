import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{

constructor(private router:Router,private data:DataService){}

  ngOnInit(): void {
    if(!this.data.loggedIn){
      this.router.navigate(['']);
    }
  }

}

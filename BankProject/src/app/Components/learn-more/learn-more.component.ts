import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css'],
})
export class LearnMoreComponent implements OnInit {
  constructor(private router: Router, private data: DataService) {}

  ngOnInit(): void {
  }
}

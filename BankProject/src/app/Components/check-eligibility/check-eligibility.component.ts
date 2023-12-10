import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanEligibility } from 'src/app/Models/loanEligibility.model';
import { DataService } from 'src/app/Services/data.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-check-eligibility',
  templateUrl: './check-eligibility.component.html',
  styleUrls: ['./check-eligibility.component.css'],
})
export class CheckEligibilityComponent implements OnInit {
  eligibility: LoanEligibility = {
    panno: '',
    income: 0,
    age: 0,
    phoneno: 0,
    cibil: 0,
  };
  constructor(private userService: UserService,private router:Router,private data:DataService) {}

  ngOnInit(): void {
    if(!this.data.loggedIn){
      this.router.navigate(['']);
    }
  }

  checkEligibility(data: any) {
    console.log(this.eligibility);
    this.userService
      .posteligibility(this.eligibility.panno)
      .subscribe((res: LoanEligibility) => {
        if (this.eligibility.phoneno == res.phoneno) {
          if (this.eligibility.age >= 21 && this.eligibility.age <= 65) {
            if (this.eligibility.income >= 10000) {
              if (res.cibil >= 700 && res.cibil <= 750) {
                alert(
                  'Credit score of ' + res.cibil + ' eligible for applying loan'
                );
              } else
                alert(
                  'Credit score of ' +
                    res.cibil +
                    ' insufficient for applying loan'
                );
            } else alert('Monthly income is not sufficient for applying loan');
          } else alert('Age should be in range of 21 to 65');
        } else alert('Phone number and pan number details are not matching');
      });
  }
}

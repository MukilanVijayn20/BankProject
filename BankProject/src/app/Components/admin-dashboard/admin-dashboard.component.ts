import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { personalLoan } from 'src/app/Models/personalLoan.model';
import { DataService } from 'src/app/Services/data.service';
import { LoanService } from 'src/app/Services/loan.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  
  loanRequests: personalLoan[]=[];
    loanstatus: any;
    constructor(private loanService: LoanService, private router: Router,private snackBar: MatSnackBar,private data:DataService,private userService:UserService) { }

    ngOnInit() {
      this.loanService.getLoan().subscribe((res:any)=>{
        this.loanRequests=res;
        console.log(this.loanRequests)
        this.loanRequests=this.loanRequests.filter((a:any)=>{
          return a.loanStatus=='pending';
        })
        this.loanRequests.forEach((a:any)=>{
          a.cibil=this.userService.geteligibility(a.pancard).subscribe((r:any)=>{
            a.cibil=r.cibil;
          })
        })
      })
    }

    aprove(id:number){
      this.loanService.aproved(id,this.loanRequests).subscribe((res:any)=>{
        console.log(res)
        console.log("aproved")
        this.ngOnInit();
        this.snackBar.open('Approved Successfully', 'Close', {
          duration: 3000, // Duration in milliseconds
          horizontalPosition: 'center', // Positioning
          verticalPosition: 'top',
        });
      })
    }

    reject(id:number){
      this.loanService.rejected(id,this.loanRequests).subscribe((res:any)=>{
        console.log(res)
        console.log("Rejected")
        this.ngOnInit();
        this.snackBar.open('Rejected Successfully', 'Close', {
          duration: 3000, // Duration in milliseconds
          horizontalPosition: 'center', // Positioning
          verticalPosition: 'top',
        });
      })
    }

    // grtCibilScore(panno:string){
    //   console.log("grtCibilScore "+panno)
    //   this.userService.geteligibility(panno).subscribe((res:any)=>{
    //     return res.panno;
    //   },err=>{
    //     return null;
    //   })
    // }
   
  }

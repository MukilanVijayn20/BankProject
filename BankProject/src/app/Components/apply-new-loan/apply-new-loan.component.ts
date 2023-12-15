import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { from } from 'rxjs';
import { Employee } from 'src/app/Models/employee.model';
import { User } from 'src/app/Models/user.model';
import { DataService } from 'src/app/Services/data.service';
import { LoanService } from 'src/app/Services/loan.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-apply-new-loan',
  templateUrl: './apply-new-loan.component.html',
  styleUrls: ['./apply-new-loan.component.css'],
})
export class ApplyNewLoanComponent implements OnInit {
  loanForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loanService: LoanService,
    private snackBar: MatSnackBar,
    private data: DataService,
    private userService:UserService
  ) {
    this.loanForm = this.fb.group({
      fullName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dateOfBirth: ['', Validators.required],
      pancard: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      monthlyIncome: [''],
      loanStatus: ['pending'],
      email: [''],
      gender: ['', Validators.required],
      loanAmount: ['', [Validators.required, Validators.min(0)]],
      loanTenure: ['', [Validators.required, Validators.min(1)]],
      employmentType: ['', Validators.required],
    });
  }

  currentUser!: User;
  currentEmployee!: Employee;
  userLogin: boolean = false;
  empLogin: boolean = false;

  ngOnInit() {
    if (this.data.currentUser) {
      this.loanForm.controls['fullName'].setValue(
        this.data.currentUser.fullName
      );
      this.loanForm.controls['mobile'].setValue(
        this.data.currentUser.mobileNumber
      );
      this.loanForm.controls['email'].setValue(this.data.currentUser.email);
    }
    this.currentEmployee = this.data.currentEmployee;
    if(this.data.currentUser){this.currentUser = this.data.currentUser;}
    this.userLogin = this.data.userLogin;
    this.empLogin = this.data.employeeLogin;
  }
  loanApplication: any;

  sample() {
    this.loanApplication = this.loanForm;
    this.loanService.postLoan(this.loanApplication).subscribe((res: any) => {
      console.log(res);
      console.log('added');
    });
  }

  onSubmit() {
    console.log('Submit button clicked');
    const loanApplication = this.loanForm.value;
    if (this.empLogin) {
      console.log("emp")
      this.loanService.postLoan(loanApplication).subscribe(
        (response) => {
          console.log('Loan application submitted successfully:', response);
          // Additional logic if needed
          this.showNotification('Loan application submitted successfully');
          this.loanForm.reset();
        },
        (error) => {
          console.error('Error submitting loan application:', error);
          // Handle errors appropriately
          this.showNotification('Error submitting loan application');
        }
      );
    }else if(this.userLogin){
      console.log("user")
      this.userService.addLoanByUser(loanApplication,this.currentUser.id).subscribe((res:any)=>{
        this.showNotification('Loan application submitted successfully');
          this.loanForm.reset();
      })
    }
  }

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
      horizontalPosition: 'center', // Positioning
      verticalPosition: 'top',
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoanService } from 'src/app/Services/loan.service';

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
    private snackBar: MatSnackBar
  ) {
    this.loanForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dateOfBirth: ['', Validators.required],
      pancard: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      monthlyIncome: [''],
      loanStatus:['pending'],
      email: [''],
      gender: ['', Validators.required],
      loanAmount: ['', [Validators.required, Validators.min(0)]],
      loanTenure: ['', [Validators.required, Validators.min(1)]],
      employmentType: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // You can keep the ngOnInit method for any additional initialization logic.
  }
  loanApplication:any;

  sample(){
    this.loanApplication=this.loanForm;
    this.loanService.postLoan(this.loanApplication).subscribe((res:any)=>{
      console.log(res)
      console.log("added")
    })
  }

  onSubmit() {
    console.log('Submit button clicked');
    const loanApplication = this.loanForm.value;
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
  }

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
      horizontalPosition: 'center', // Positioning
      verticalPosition: 'top',
    });
  }
}

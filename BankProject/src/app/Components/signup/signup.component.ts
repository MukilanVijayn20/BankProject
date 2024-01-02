import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import Validation from 'src/app/Models/validation';
import { DataService } from 'src/app/Services/data.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  signupData: User = {
    id: 0,
    email: '',
    password: '',
    fullName: '',
    mobileNumber: '',
    loanApplication: [],
  };
  user!: User;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        mobileNumber: [
          '',
          [
            Validators.required,
            Validators.pattern('^((//+91-?)|0)?[0-9]{10}$'),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.signupData.email = this.form.value.email;
    this.signupData.password = this.form.value.password;
    this.signupData.mobileNumber = this.form.value.mobileNumber;
    this.signupData.fullName = this.form.value.fullName;
    if (this.form.invalid) {
      return;
    } else {
      this.userService.getUser().subscribe((res: any) => {
        this.user = res.find((a: any) => {
          return a.email === this.signupData.email;
        });
        if (this.user) {
          alert('Mail Id is already Exist');
        } else {
          this.userService
            .postUser(this.signupData)
            .subscribe((response: any) => {
              // this.form.reset();
              alert('Added Successfully');
              this.data.currentUser = this.signupData;
              this.data.loggedIn = true;
              this.data.currentUser = this.user;
              this.data.userLogin = true;
              this.data.employeeLogin = false;
              sessionStorage.setItem('loggedIn', 'true');
              sessionStorage.setItem('userLogin', 'true');
              sessionStorage.setItem('employeeLogin', 'false');
              // sessionStorage.setItem(
              //   'UserId',
              //   this.data.currentUser.id.toString()
              // );
              this.router.navigate(['/login']);
            });
        }
      });
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}

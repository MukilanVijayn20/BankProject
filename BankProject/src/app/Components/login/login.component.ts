import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { AdminService } from 'src/app/Services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  pass: string = 'password';
  eye: string = 'fa fa-eye-slash';
  eye_icon: boolean = false;
  user: User | undefined;

  form!: FormGroup;
  submitted = false;

  constructor(
    private userService: UserService,
    private adminService: AdminService,
    private router: Router,
    private data: DataService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private empService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
      role: ['user'],
    });
    sessionStorage.setItem('loggedIn', 'false');
    sessionStorage.setItem('userLogin', 'false');
    sessionStorage.setItem('employeeLogin', 'false');
    sessionStorage.setItem('UserId', "false");
    sessionStorage.setItem('EmployeeId', "false");
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    } else {
      if (this.form.value.role == 'user') {
        this.userService.getUser().subscribe((data: any) => {
          this.user = data.find((a: any) => {
            return (
              a.email === this.form.value.email &&
              a.password === this.form.value.password
            );
          });
          if (this.user) {
            this.data.loggedIn = true;
            this.data.currentUser = this.user;
            this.data.userLogin = true;
            this.data.employeeLogin = false;
            sessionStorage.setItem('loggedIn', 'true');
            sessionStorage.setItem('userLogin', 'true');
            sessionStorage.setItem('employeeLogin', 'false');
            sessionStorage.setItem('UserId',this.data.currentUser.id.toString());
            this.snackBar.open('Logged in Successfully', 'Close', {
              duration: 3000, // Duration in milliseconds
              horizontalPosition: 'center', // Positioning
              verticalPosition: 'top',
            });
            this.router.navigate(['/home']);
          } else {
            alert('Credentials is Wrong');
          }
        });
      } else if (this.form.value.role === 'admin') {
        this.adminService.getUser().subscribe((data: any) => {
          const user = data.find((a: any) => {
            return (
              a.email === this.form.value.email &&
              a.password === this.form.value.password
            );
          });
          if (user) {
            this.router.navigate(['/admin-dashboard']);
          } else {
            alert('Credentials is Wrong');
          }
        });
      } else if (this.form.value.role === 'employee') {
        this.empService.getUser().subscribe((data: any) => {
          const user = data.find((a: any) => {
            return (
              a.empEmail === this.form.value.email &&
              a.empPassword === this.form.value.password
            );
          });
          if (user) {
            this.data.loggedIn = true;
            this.data.currentEmployee = user;
            this.data.employeeLogin = true;
            this.data.userLogin = false;
            sessionStorage.setItem('loggedIn', 'true');
            sessionStorage.setItem('userLogin', 'false');
            sessionStorage.setItem('employeeLogin', 'true');
            sessionStorage.setItem(
              'EmployeeId',
              this.data.currentEmployee.id.toString()
            );
            this.snackBar.open('Logged in Successfully', 'Close', {
              duration: 3000, // Duration in milliseconds
              horizontalPosition: 'center', // Positioning
              verticalPosition: 'top',
            });
            this.router.navigate(['/home']);
          } else {
            alert('Credentials is Wrong');
          }
        });
      }
    }
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  show() {
    if (!this.eye_icon) {
      this.eye = 'fa fa-eye';
      this.pass = 'text';
      this.eye_icon = !this.eye_icon;
    } else {
      this.eye = 'fa fa-eye-slash';
      this.pass = 'password';
      this.eye_icon = !this.eye_icon;
    }
  }
}

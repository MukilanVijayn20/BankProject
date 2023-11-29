import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { DataService } from '../../Services/data.service';
import { User } from '../../Models/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  // loginData = {
  //   email: '',
  //   password: '',
  //   FullName:'',
  //   age:0,
  //   MobileNumber:0
  // };
  loginData: User = new User;
  pass: string = 'password';
  eye: string = 'fa fa-eye-slash';
  eye_icon: boolean = false;
  user: User = new User();

  constructor(
    private userservice: UserService,
    private data: DataService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {}

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

  signup() {
    // this.user.email=this.loginData.email
    // this.user.password=this.loginData.password
    // this.http.post<any>("http://localhost:3000/user",this.loginData).subscribe(res=>{
    //   console.log(res);
    //   alert("Successfully Signed Up");
    //   this.data.currentUser=this.user;
    //   this.data.loggedIn=true;
    //   this.router.navigate(['home']);
    // })

    this.user.email = this.loginData.email;
    this.user.password = this.loginData.password;
    this.user.fullName=this.loginData.fullName;
    this.user.mobileNumber=this.loginData.mobileNumber;
    this.user.age=this.loginData.age;
    console.log(this.loginData)
    this.userservice.postUser(this.loginData).subscribe((res: any) => {
      alert('Successfully Signed In');
      console.log(this.user);
      console.log(res);
      this.data.loggedIn = true;
      this.data.currentUser = this.user;
      this.router.navigate(['/home']);
    });
  }
}

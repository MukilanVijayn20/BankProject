import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginData = {
    email: '',
    password: '',
  };
  pass: string = 'password';
  eye: string = 'fa fa-eye-slash';
  eye_icon: boolean = false;
  user:User | undefined;

  constructor(private userService:UserService,private router:Router,private data:DataService){}

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

  login() {
    this.userService.getUser().subscribe((data:any)=>{
      this.user=data.find((a:any)=>{
        return a.email=== this.loginData.email && a.password === this.loginData.password
      })
    })
    if(this.user){
      // alert("Login Successfully")
      this.data.loggedIn=true;
      this.data.currentUser=this.user;
      this.router.navigate(['/home'])
    }
  }
}

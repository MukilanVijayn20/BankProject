import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { AdminService } from 'src/app/Services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginData = {
    role:'user',
    email: '',
    password: '',
  };
  pass: string = 'password';
  eye: string = 'fa fa-eye-slash';
  eye_icon: boolean = false;
  user:User | undefined;

  constructor(private userService:UserService,private adminService:AdminService,private router:Router,private data:DataService,private snackBar:MatSnackBar,private fb: FormBuilder){}

  ngOnInit() {}

  sample(){
    console.log(this.loginData)
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

  loginForm: FormGroup = this.fb.group({

    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  login() {
    if(this.loginData.role==''||this.loginData.email==null){
      alert("Enter Role")
    }
    else if(this.loginData.email==''||this.loginData.email==null){
      alert("Email should not be Empty")
    }
    else if(this.loginData.password==''||this.loginData.password==null){
      alert("Password should not be Empty")
    }
    else if(this.loginData.role=="user"){
      this.userService.getUser().subscribe((data:any)=>{
        this.user=data.find((a:any)=>{
          return a.email=== this.loginData.email && a.password === this.loginData.password
        })
        if(this.user){
          // alert("Login Successfully")
          this.data.loggedIn=true;
          this.data.currentUser=this.user;
          this.snackBar.open('Logged in Successfully', 'Close', {
            duration: 3000, // Duration in milliseconds
            horizontalPosition: 'center', // Positioning
            verticalPosition: 'top',
          });
          this.router.navigate(['/home'])
        }else{
          alert("Credentials is Wrong");
        }
      })
    }
    else if(this.loginData.role=="admin"){
      this.adminService.getUser().subscribe((data:any)=>{
        const user=data.find((a:any)=>{
          return a.email=== this.loginData.email && a.password === this.loginData.password
        })
        if(user){
          this.router.navigate(['/admin-dashboard'])
        }else{
          alert("Credentials is Wrong");
        }
      })
    }
  }
}








// import { Component,OnInit } from '@angular/core';
// import { User } from 'src/app/Models/user.model';
// import { UserService } from 'src/app/Services/user.service';
// import { Router } from '@angular/router';
// import { DataService } from 'src/app/Services/data.service';
// import { AdminService } from 'src/app/Services/admin.service';


// import { FormGroup, FormBuilder, Validators } from '@angular/forms'


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit{
//   loginData = {
//     role:'',
//     email: '',
//     password: '',
//   };
//   pass: string = 'password';
//   eye: string = 'fa fa-eye-slash';
//   eye_icon: boolean = false;
//   user:User | undefined;

//   constructor(private userService:UserService,private adminService:AdminService,private router:Router,private data:DataService,private fb: FormBuilder){}

//   ngOnInit() {}



//   hide: boolean = false;

 
  

//   loginForm: FormGroup = this.fb.group({

//     email: ['', [Validators.required, Validators.email]],
//     password: ['', [Validators.required, Validators.minLength(6)]]
//   })


//   onLogin() {


//     if(this.loginData.role==''){
//       alert("Enter Role")
//     }


//     if (!this.loginForm.valid) {
//       return;
//     }
//     console.log(this.loginForm.value);
//     this.userService.getUser().subscribe((data:any)=>{
//       this.user=data.find((a:any)=>{
//         return a.email=== this.loginData.email && a.password === this.loginData.password
//       })
//       if(this.user){
//         // alert("Login Successfully")
//         this.data.loggedIn=true;
//         this.data.currentUser=this.user;
//         this.router.navigate(['/home'])
//       }else{
//         alert("Credentials is Wrong");
//       }
//     })
//   }

// }
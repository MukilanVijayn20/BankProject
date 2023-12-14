import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/user.service';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  userId!:any;
  empId!:number;
  constructor(private data: DataService, private router: Router,private snackBar:MatSnackBar,private userService:UserService,private employeeService:EmployeeService) {}

  ngOnInit() {
    this.data.loggedIn=this.loggedIn=sessionStorage.getItem("loggedIn")==="true";
    this.data.employeeLogin=sessionStorage.getItem('employeeLogin')==="true"
    this.data.userLogin=sessionStorage.getItem('userLogin')==="true"
    if(this.data.userLogin){
      const id=sessionStorage.getItem("UserId");
      if(id!=null){
        this.userId=parseInt(id, 10);
      }
      this.userService.getUserById(this.userId).subscribe((res:any)=>{
        this.data.currentUser=res;
      })
    }
    if(this.data.employeeLogin){
      const id=sessionStorage.getItem("EmployeeId");
      if(id!=null){
        this.empId=parseInt(id, 10);
      }
    }
  }

  logOut() {
    this.data.currentUser =null;
    this.data.loggedIn = false;
    console.log('logout success');
    this.snackBar.open('Logged out Successfully', 'Close', {
      duration: 3000, // Duration in milliseconds
      horizontalPosition: 'center', // Positioning
      verticalPosition: 'top',
    });
    this.ngOnInit();
    this.router.navigate(['/']);
  }

  
}

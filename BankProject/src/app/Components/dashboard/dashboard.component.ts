import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { DataService } from 'src/app/Services/data.service';
import { StateService } from 'src/app/Services/state.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  loggedIn: boolean = false;
  currentUser!: User;
  empLogin: boolean = false;
  userLogin: boolean = false;
  constructor(
    private data: DataService,
    private router: Router,
    private userService: UserService,
    private stateService: StateService
  ) {}

  ngOnInit() {
    this.loggedIn = sessionStorage.getItem('loggedIn') === 'true';
    if (this.data.currentUser) {
      this.currentUser = this.data.currentUser;
    }
    this.empLogin = this.data.employeeLogin;
    this.userLogin = this.data.userLogin;

    const refreshFlag = this.stateService.getRefreshFlag();
    if (refreshFlag) {
      this.refresh();
    }
    this.stateService.setRefreshFlag(true);
  }

  refresh() {
    this.userLogin = sessionStorage.getItem('userLogin') === 'true';
    const uid = sessionStorage.getItem('UserId');
    if (uid != null && uid != 'false') {
      const id = parseInt(uid, 10);
      this.userService.getUserById(id).subscribe((res: any) => {
        this.currentUser = res;
      });
    }
  }

  logOut() {
    // this.data.currentUser = null;
    this.data.loggedIn = false;
    console.log('logout success');
    alert('logged Out Successfully');
    this.ngOnInit();
  }
}

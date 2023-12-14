import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee.model';
import { User } from 'src/app/Models/user.model';
import { DataService } from 'src/app/Services/data.service';
import { LoanService } from 'src/app/Services/loan.service';
import { StateService } from 'src/app/Services/state.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-personal-loan',
  templateUrl: './personal-loan.component.html',
  styleUrls: ['./personal-loan.component.css'],
})
export class PersonalLoanComponent implements OnInit {
  p: number = 500000;
  r: number = 5;
  n: number = 2;
  EMI: number = 0;
  total: number = 0;
  showResult: boolean = false;
  a: string = '';
  b: string = '';
  c: string = '';
  loanApplication: any;
  currentUser!:User;
  userLogin:boolean=false;
  empLogin:boolean=false;

  constructor(
    private loanService: LoanService,
    private data: DataService,
    private router: Router,
    private stateService:StateService,
    private userService:UserService
  ) {}

  ngOnInit() {
    const refreshFlag = this.stateService.getRefreshFlag();
    if(refreshFlag){
      this.refresh();
    }
    this.stateService.setRefreshFlag(true);
    this.loanService.getLoan().subscribe((res: any) => {
      this.loanApplication = res;
    });
    this.userLogin=this.data.userLogin;
    this.empLogin=this.data.employeeLogin;
    if(this.data.currentUser){
      this.currentUser=this.data.currentUser;
    }
    
  }

  refresh(){
    const uid=sessionStorage.getItem("UserId")
    if(uid!=null&&uid!="false"){
      const id=parseInt(uid,10);
      this.userService.getUserById(id).subscribe((res:any)=>{
        this.currentUser=res;
      })
    }
    const eid=sessionStorage.getItem("EmployeeId");
    if(eid!=null&&eid!="false"){
      this.loanService.getLoan().subscribe((res: any) => {
        this.loanApplication = res;
      });
    }
  }

  calculate() {
    this.showResult = true;
    const r = this.r / 12 / 100;
    const n = this.n * 12;
    const numerator = (1 + r) ** n;
    const denomerator = (1 + r) ** n - 1;
    const a = this.p * r;
    const Emi = (a * numerator) / denomerator;
    this.EMI = Math.round(Emi);
    this.a = Math.round(Emi)
      .toString()
      .replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');
    this.total = this.EMI * n;
    this.b = (this.total - this.p)
      .toString()
      .replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');
    this.c = this.total.toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');
  }

  reset() {
    this.showResult = false;
    this.p = 500000;
    this.r = 5;
    this.n = 2;
  }

  active(name: string) {
    this.userLogin=sessionStorage.getItem("userLogin")==="true"
    this.empLogin=sessionStorage.getItem("employeeLogin")==="true"
    const a = document.querySelector('.act') as HTMLElement;
    const b = document.querySelector('.active') as HTMLElement;
    a.classList.remove('act');
    b.classList.remove('active');
    this.sample(a,b);
    document.querySelector('.' + name)?.classList.add('act');
    document.querySelector('.' + name + '-content')?.classList.add('active');
  }

  sample(a:any,b:any){
    a.classList.remove('act');
    b.classList.remove('active');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-loan',
  templateUrl: './home-loan.component.html',
  styleUrls: ['./home-loan.component.css'],
})
export class HomeLoanComponent implements OnInit {
  p: number = 500000;
  r: number = 5;
  n: number = 2;
  EMI: number = 0;
  total: number = 0;
  showResult: boolean = false;
  a: string = '';
  b: string = '';
  c: string = '';
  constructor() {}

  ngOnInit() {}

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
    this.r = 9;
    this.n = 5;
  }

  active(name: string) {
    const a = document.querySelector('.act');
    const b = document.querySelector('.active');
    if (a) {
      a.classList.remove('act');
    }
    if (b) {
      b.classList.remove('active');
    }
    document.querySelector('.' + name)?.classList.add('act');
    document.querySelector('.' + name + '-content')?.classList.add('active');
  }
}

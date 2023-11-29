import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component'; 
import { SignupComponent } from './Components/signup/signup.component';
import { HomeLoanComponent } from './Components/home-loan/home-loan.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home-loan', component: HomeLoanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

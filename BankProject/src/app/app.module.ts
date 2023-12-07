import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { HomeLoanComponent } from './Components/home-loan/home-loan.component';
import { HeaderComponent } from './Components/header/header.component';
import { MatSliderModule } from '@angular/material/slider';
import { FooterComponent } from './Components/footer/footer.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ApplyNewLoanComponent } from './Components/apply-new-loan/apply-new-loan.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ContactComponent } from './Components/contact/contact.component';
import { LearnMoreComponent } from './Components/learn-more/learn-more.component';
import { PersonalLoanComponent } from './Components/personal-loan/personal-loan.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeLoanComponent,
    HeaderComponent,
    FooterComponent,
    AdminDashboardComponent,
    AboutUsComponent,
    ApplyNewLoanComponent,
    ContactComponent,
    LearnMoreComponent,
    PersonalLoanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSliderModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

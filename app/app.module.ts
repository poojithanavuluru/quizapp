import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from  '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { BackgroundDirective } from './background.directive';
import { ViewComponent } from './view/view.component';
import { HttpClientModule} from '@angular/common/http';
import { TutorialComponent } from './tutorial/tutorial.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { Quiz1Component } from './quiz1/quiz1.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    QuizComponent,
    BackgroundDirective,
    ViewComponent,
    TutorialComponent,
    DropdownComponent,
    Quiz1Component,
    HomeComponent,
    OverviewComponent    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

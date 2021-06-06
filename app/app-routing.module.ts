import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {QuizComponent} from './quiz/quiz.component';
import {Quiz1Component} from './quiz1/quiz1.component';
import{HomeComponent} from './home/home.component';
import{OverviewComponent} from './overview/overview.component';

import {ViewComponent} from './view/view.component';
import {TutorialComponent} from './tutorial/tutorial.component';
import{DropdownComponent} from'./dropdown/dropdown.component';

const routes: Routes = [
    {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'quiz',component:QuizComponent},
  {path:'quiz1',component:Quiz1Component},
  {path:'view',component:ViewComponent},
  {path:'tutorial',component:TutorialComponent},
  {path:'dropdown',component:DropdownComponent},
  {path:'home',component:HomeComponent},
  {path:'overview',component:OverviewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,OverviewComponent,HomeComponent,Quiz1Component,QuizComponent,ViewComponent,TutorialComponent,DropdownComponent]

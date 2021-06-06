import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Detail} from '../detail';
import {DetailService} from '../detail.service';
import{FormControl,FormGroup} from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  form:any;
  detail : Detail = new Detail();
 
  constructor(private detailService: DetailService, private route: Router) { }
  ngOnInit()
  {
    this.form=new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      confirmPassword:new FormControl('')
    });

  }

register()
 {
   localStorage.setItem("name",this.form.value.name);
   localStorage.setItem("email",this.form.value.email);
   localStorage.setItem("password",this.form.value.password);
   localStorage.setItem("confirmPassword",this.form.value.confirmPassword);

   // this.detailService.insertDetails(this.detail);
   if(this.form.value.password==this.form.value.confirmPassword)
   {
    this.route.navigateByUrl("/login");
   }
   else{
     window.alert("password and confirm password fields doesnot match");
   }
   

  } 
  
  

}
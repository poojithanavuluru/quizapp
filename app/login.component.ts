import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,NgModel,FormGroupDirective} from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from "../login.service";
import {Detail} from '../detail';
import {DetailService} from '../detail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  detail : Detail = new Detail();
  form:any;

  constructor(public srvc :LoginService,public rtr:Router) { }

  ngOnInit(): void {

   this.form=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  });
}
   
checkuser(){
  
   if(localStorage.getItem("email")==this.form.value.email && localStorage.getItem("password")==this.form.value.password)
   {
  
    this.rtr.navigate(["dropdown"])
  
  }
  else{
    window.alert("username or password is not correct");
  }

}


}
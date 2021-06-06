import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  validateUsername(username: any,password: any){
    return true;
  }
}

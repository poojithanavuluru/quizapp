import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Detail } from './detail';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  
private details: Detail[]=[];
  flag:boolean=false;
  constructor(private http: HttpClient) {}

  loadDetails():Observable<any>{
    let url = "../assets/data.json";
    this.flag=true;
    return this.http.get(url);
  }


  setDetails(details:Detail[]):void {
    this.details=details;
  }

  getDetails():Detail[]{
    return this.details;
  }
  


  insertDetails(detail:Detail){
    this.details.push(detail);
  }

  
}

import { Component, OnInit } from '@angular/core';
import { DetailService} from '../detail.service';
import { ThrowStmt } from '@angular/compiler';
import {Detail} from '../detail';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  

  details: Detail[] = [];

  
  detail: Detail = new Detail();

  editFlag: boolean = false;  constructor(private detailService: DetailService) { }


  ngOnInit() {
    if (this.detailService.flag)
      this.details = this.detailService.getDetails();
    else {
      if (this.details.length <= 0) {
        this.detailService.loadDetails().subscribe((data: any[]) => {
          this.details = data;
          this.detailService.setDetails(this.details);
        });
      }
    }
  }

  


}

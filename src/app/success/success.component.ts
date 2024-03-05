import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  RID : any;
  Batch : any;
  FirstName : any;
  LastName : any;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const rid = params['RID'];
      const batch = params['Batch'];
      const firstName = params['FirstName'];
      const lastName = params['LastName'];

      this.RID = rid;
      this.Batch = batch; 
      this.FirstName = firstName;
      this.LastName = lastName;
    })
  }



}

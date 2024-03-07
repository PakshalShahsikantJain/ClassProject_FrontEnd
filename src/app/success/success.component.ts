import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { first } from 'rxjs';
import { LoadingService } from '../loading.service';
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
  Email : any;

  constructor(private route : ActivatedRoute,private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.setLoadingState(true);

    this.route.queryParams.subscribe(params => {
      const rid = params['RID'];
      const batch = params['Batch'];
      const firstName = params['FirstName'];
      const lastName = params['LastName'];
      const email = params['Email'];

      this.RID = rid;
      this.Batch = batch; 
      this.FirstName = firstName;
      this.LastName = lastName;
      this.Email = email;

      this.loadingService.setLoadingState(false);
    })
  }



}

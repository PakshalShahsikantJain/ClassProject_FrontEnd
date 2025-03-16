import { Component, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { first } from 'rxjs';
import { LoadingService } from '../services/loading-page/loading.service';
import { MatCard, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';
@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.css'],
    imports: [MatCard, MatCardTitle, MatCardContent, MatDivider, MatCardActions, MatButton, RouterLink]
})
export class SuccessComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private loadingService = inject(LoadingService);


  RID : any;
  Batch : any;
  FirstName : any;
  LastName : any;
  Email : any;

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

import { Component, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-loading',
    template: `
    <div class="loading-overlay">
      <mat-spinner class="spinner"></mat-spinner>
      <h1 class="text">Programmer's Den Loading Soon.<br> Sorry To Keep You Waiting..!!</h1>
    </div>
  `,
    styleUrls: ['./loading.component.css'],
    imports: [MatProgressSpinner]
})

export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

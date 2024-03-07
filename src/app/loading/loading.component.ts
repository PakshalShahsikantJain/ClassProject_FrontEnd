import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="loading-overlay">
      <div class="spinner"></div>
      <h1 class="text">Programmer's Den Loading Soon...!!</h1>
    </div>
  `,
  styleUrls: ['./loading.component.css']
})

export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

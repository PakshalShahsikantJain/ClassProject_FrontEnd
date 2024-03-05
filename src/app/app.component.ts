import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed: boolean = false;
  cartCount : number = 0;
  constructor() {
    this.checkWidth();
    
    window.addEventListener('resize', () => {
      this.checkWidth();
    });
  }

  checkWidth() {
    this.isCollapsed = window.innerWidth <= 600; 
  }

}

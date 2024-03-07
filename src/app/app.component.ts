import { Component } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed: boolean = false;
  cartCount : number = 0;
  constructor(public loadingService: LoadingService) {
    this.checkWidth();
    
    window.addEventListener('resize', () => {
      this.checkWidth();
    });
  }

  checkWidth() {
    this.isCollapsed = window.innerWidth <= 600; 
  }

}

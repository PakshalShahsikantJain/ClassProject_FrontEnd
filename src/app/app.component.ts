import { Component, inject } from '@angular/core';
import { LoadingService } from './services/loading-page/loading.service';
import { AsyncPipe } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton, MatButton } from '@angular/material/button';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [LoadingComponent, MatToolbar, MatIconButton, MatMenuTrigger, MatIcon, MatButton, RouterLink, MatMenu, MatMenuItem, RouterOutlet, MatCard, MatCardTitle, MatCardContent, AsyncPipe]
})
export class AppComponent {
  loadingService = inject(LoadingService);

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

import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollToTopService {
  private router = inject(Router);


  scrollToTopOnRouterNavigation(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to top on navigation end
      }
    });
  }
}

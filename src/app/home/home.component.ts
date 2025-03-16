import { Component, OnInit, inject } from '@angular/core';
import { ScrollToTopService } from '../services/scroll-to-top/scroll-to-top.service';
import { SaveDataService } from '../services/save-data/save-data.service';
import { LoadingService } from '../services/loading-page/loading.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { MatDivider } from '@angular/material/divider';
import { MatCard, MatCardContent, MatCardImage } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CarouselModule, MatDivider, MatCard, MatCardContent, MatCardImage, MatButton, RouterLink, AboutusComponent]
})
export class HomeComponent implements OnInit {
  private scroll = inject(ScrollToTopService);
  private data = inject(SaveDataService);
  private loadingService = inject(LoadingService);

  slides = [
    { image: 'assets/slide1.jpg',title : '"Practical Knowledge > Theoretical Knowledge"'},
    { image: 'assets/slide2.jpg',title : '"Programming is an art of Talking With Machines"'},
  ];

  items : any[] = [];

  ngOnInit(): void {
    this.loadingService.setLoadingState(true);

    this.data.receiveData().subscribe(response => {
      this.items = response;
      this.loadingService.setLoadingState(false);
    });

    this.scroll.scrollToTopOnRouterNavigation();
  }

}

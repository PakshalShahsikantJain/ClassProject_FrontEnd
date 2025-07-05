import { Component, OnInit, inject } from '@angular/core';
import { ScrollToTopService } from '../services/scroll-to-top/scroll-to-top.service';
import { MatCard, MatCardHeader, MatCardAvatar, MatCardContent, MatCardTitle } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-aboutus',
    templateUrl: './aboutus.component.html',
    styleUrls: ['./aboutus.component.css'],
    imports: [MatCard, MatIcon, MatCardContent, MatCardTitle]
})

export class AboutusComponent implements OnInit {
  private scroll = inject(ScrollToTopService);


  ngOnInit(): void {
    this.scroll.scrollToTopOnRouterNavigation();
  }

}

import { Component, OnInit } from '@angular/core';
import { ScrollToTopService } from '../scroll-to-top.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})

export class AboutusComponent implements OnInit {

  constructor(private scroll : ScrollToTopService) { }

  ngOnInit(): void {
    this.scroll.scrollToTopOnRouterNavigation();
  }

}

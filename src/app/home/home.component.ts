import { Component, OnInit } from '@angular/core';
import { ScrollToTopService } from '../scroll-to-top.service';
import { SaveDataService } from '../save-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    { image: 'assets/slide1.jpg',title : '"Practical Knowledge > Theoretical Knowledge"'},
    { image: 'assets/slide2.jpg',title : '"Programming is an art of Talking With Machines"'},
  ];

  items : any[] = [];

  constructor(private scroll : ScrollToTopService,private data : SaveDataService) { }

  ngOnInit(): void {
    this.data.receiveData().subscribe(response => {
      this.items = response;
    });

    this.scroll.scrollToTopOnRouterNavigation();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ScrollToTopService } from '../scroll-to-top.service';
import { SaveDataService } from '../save-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Title : string = "";

  items : any[] = [];

  constructor(private route: ActivatedRoute,private scroll : ScrollToTopService,private data : SaveDataService) 
  { 
  }

  ngOnInit(): void {
    this.data.receiveData().subscribe(response => {
      this.items = response;
    });

    this.route.params.subscribe(params => {
      this.Title = params['title']
    });
    
    this.scroll.scrollToTopOnRouterNavigation();
  }
}

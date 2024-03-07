import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ScrollToTopService } from '../scroll-to-top.service';
import { SaveDataService } from '../save-data.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Title : string = "";

  items : any[] = [];

  constructor(private route: ActivatedRoute,private loadingService: LoadingService,private scroll : ScrollToTopService,private data : SaveDataService) 
  { 
  }

  ngOnInit(): void {
    this.loadingService.setLoadingState(true);

    this.data.receiveData().subscribe(response => {
      this.items = response;

      this.loadingService.setLoadingState(false);
    });

    this.route.params.subscribe(params => {
      this.Title = params['title']
    });
    
    this.scroll.scrollToTopOnRouterNavigation();
  }
}

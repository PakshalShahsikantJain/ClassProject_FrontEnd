import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ScrollToTopService } from '../scroll-to-top.service';
import { SaveDataService } from '../save-data.service';
import { LoadingService } from '../loading.service';
import { DownloadpdfService } from '../downloadpdf.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Title : string = "";

  items : any[] = [];

  constructor(private route: ActivatedRoute,private loadingService: LoadingService,
    private scroll : ScrollToTopService,private data : SaveDataService,private dobj : DownloadpdfService) 
  {}

  ngOnInit(): void {
    this.loadingService.setLoadingState(true);
    this.scroll.scrollToTopOnRouterNavigation();
    
    this.data.receiveData().subscribe(response => {
      this.items = response;

      this.loadingService.setLoadingState(false);
    });

    this.route.params.subscribe(params => {
      this.Title = params['title']
    });
  }

  DownloadPDF(filename : any)
  {
    this.dobj.downloadPDF(filename);
  }
}

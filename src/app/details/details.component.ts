import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ScrollToTopService } from '../services/scroll-to-top/scroll-to-top.service';
import { SaveDataService } from '../services/save-data/save-data.service';
import { LoadingService } from '../services/loading-page/loading.service';
import { DownloadpdfService } from '../services/downloadpdf/downloadpdf.service';
import { CurrencyPipe } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css'],
    imports: [MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatDivider, MatButton, RouterLink, CurrencyPipe]
})
export class DetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private loadingService = inject(LoadingService);
  private scroll = inject(ScrollToTopService);
  private data = inject(SaveDataService);
  private dobj = inject(DownloadpdfService);

  Title : string = "";

  items : any[] = [];

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

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
  { 
  }

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

  DownloadPDF()
  {
    var filename : string = " ";
    
    switch(this.Title) 
    {
      case "C, C++ and Java Programming" :
        {
          filename = "1.pdf";
          break;
        }
      
      case "MEAN(MongoDB, Express, Angular, Node JS) Full Stack Web Development" :
        {
          filename = "2.pdf";
          break;
        }
    
      case "Programming in GoLang" :
        {
          filename = "3.pdf";
          break;
        }
  
      case "Programming in Python" :
        {
          filename = "4.pdf";
          break;
        }
      default :
      {
        console.log("Batch Not Found");
        return;
      }
    }

    this.dobj.downloadPDF(filename);
  }
}

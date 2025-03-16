import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, FormControl, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ValidataionService } from '../services/validation/validataion.service';
import { ScrollToTopService } from '../services/scroll-to-top/scroll-to-top.service';
import { SaveDataService } from '../services/save-data/save-data.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    imports: [MatToolbar, MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatIcon, MatDivider, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatError, MatSuffix, MatButton]
})

export class ContactComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);
  private scroll = inject(ScrollToTopService);
  private save = inject(SaveDataService);
  private _snackBar = inject(MatSnackBar);

  contactForm: UntypedFormGroup;

  constructor() 
  { 
    this.contactForm = this.formBuilder.group({
      name : ['',[Validators.required,ValidataionService.NameValidator]],
      email : ['',[Validators.required,ValidataionService.EmailValidator]],
      phone : ['',[Validators.required,ValidataionService.PhoneValidator]],
      subject : ['',Validators.required],
      message : ['',Validators.required],
    })
  }

  ngOnInit(): void {
    this.scroll.scrollToTopOnRouterNavigation();
  }

  sendMessage()
  {
    this.save.messageData(this.contactForm.value).subscribe(response => {
      if(response == true)
      {
        this._snackBar.open('Message Received Successfully','Ok');
      }
      else 
      {
        console.log("An Error Occured While Saving Data");
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidataionService } from '../validataion.service';
import { ScrollToTopService } from '../scroll-to-top.service';
import { SaveDataService } from '../save-data.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private scroll : ScrollToTopService,
    private save : SaveDataService,private _snackBar: MatSnackBar) 
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

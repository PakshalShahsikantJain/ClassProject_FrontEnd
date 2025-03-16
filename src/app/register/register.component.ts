import { Component, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, FormControl, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ValidataionService } from '../services/validation/validataion.service';
import { ScrollToTopService } from '../services/scroll-to-top/scroll-to-top.service';
import { SaveDataService } from '../services/save-data/save-data.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatLabel, MatError, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { MatIcon } from '@angular/material/icon';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    imports: [MatToolbar, MatCard, ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatError, MatIcon, MatSuffix, MatSelect, MatOption, MatButton]
})

export class RegisterComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);
  private scroll = inject(ScrollToTopService);
  private sobj = inject(SaveDataService);
  private router = inject(Router);

  
  userForm: UntypedFormGroup;
  
  paymentOptions = ['Cash ', 'UPI', 'Other '];
  
  Batches : any[] = [];  

  constructor() { 
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required,ValidataionService.NameValidator]],
      middleName: ['', ValidataionService.NameValidator],
      lastName: ['', [Validators.required,ValidataionService.NameValidator]],
      email: ['', [Validators.required, ValidataionService.EmailValidator]],
      phone: ['', [Validators.required,ValidataionService.PhoneValidator]],
      address : ['',Validators.required],
      currentAddress : ['',Validators.required],
      state : ['',[Validators.required,ValidataionService.NameValidator]],
      city : ['',[Validators.required,ValidataionService.NameValidator]],
      pinCode : ['',[Validators.required,ValidataionService.NumberValidator]],
      batch : ['',Validators.required],
      payment : '',
      // Add more form controls and validators as needed 
    });
  }

  ngOnInit(): void {
    this.scroll.scrollToTopOnRouterNavigation();
    this.sobj.receiveData().subscribe((response)=>{
      console.log(response);
      for(var i = 0;i < response.length;i++)
      {
        if(response[i].status != "Inactive")
        {
          this.Batches.push(response[i]);
        }
      }
    })
  }

  Save() {
    var rid : String;
    var batch : String;
    var firstName : String;
    var lastName : String;
    var email : String;
    var data : any;
    
    if (confirm('Are you sure you want to Submit Form ?')) 
    {
      this.sobj.saveData(this.userForm.value).subscribe(response => {
        console.log(response);
        
        data = response;
        firstName = data.firstName;
        lastName = data.lastName;
        rid = data.RID;
        email = data.email;

        for(var i = 0;i < this.Batches.length;i++)
        {
          if(data.batch == this.Batches[i].bid)
          {
            break;
          }
        }
    
        batch = this.Batches[i].batch;
        console.log(batch);
    
        this.router.navigate(['/success'],
        { 
          queryParams: { 
            'RID': rid,
            'FirstName' : firstName,
            'LastName' : lastName ,
            'Batch' : batch,
            'Email' : email,
          } 
        });
      });
    }
  }
}

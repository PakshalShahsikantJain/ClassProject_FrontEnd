import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidataionService } from '../validataion.service';
import { ScrollToTopService } from '../scroll-to-top.service';
import { SaveDataService } from '../save-data.service';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  userForm: FormGroup;
  
  paymentOptions = ['Cash ', 'UPI', 'Other '];
  
  Batches : any[] = [];  

  constructor(private formBuilder: FormBuilder,private scroll : ScrollToTopService,
    private sobj : SaveDataService,private router : Router) { 
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

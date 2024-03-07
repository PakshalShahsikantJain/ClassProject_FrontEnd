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
  
  Categories = [
    {
      'value' : 'MEAN',
      'Category' : 'MEAN Stack Web Development'
    },
    {
      'value' : 'CCJ',
      'Category' : 'C, C++ and Java Programming',
    },
    {
      'value' : 'GO',
      'Category' : 'Programming in GoLang',
    },
    {
      'value' : 'PY',
      'Category' : 'Programming in Python'
    },
  ];

  constructor(private formBuilder: FormBuilder,private scroll : ScrollToTopService,
    private save : SaveDataService,private router : Router) { 
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
      this.save.saveData(this.userForm.value).subscribe(response => {
        console.log(response);
        
        data = response;
        firstName = data.firstName;
        lastName = data.lastName;
        rid = data.RID;
        email = data.email;

        for(var i = 0;i < this.Categories.length;i++)
        {
          if(data.batch == this.Categories[i].value)
          {
            break;
          }
        }
    
        batch = this.Categories[i].Category;
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

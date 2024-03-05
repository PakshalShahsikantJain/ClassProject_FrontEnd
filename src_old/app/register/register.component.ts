import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidataionService } from '../validataion.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  userForm: FormGroup;
  
  paymentOptions = ['Cash ', 'UPI', 'Other '];
  
  Batch = [
    {
      'value' : 'C - C++ - Java',
      'batch' : 'C - C++ - Java'
    },
    {
      'value' : 'Python With Automation',
      'batch' : 'Python With Automation',
    },
    {
      'value' : 'MEAN Stack Web Development',
      'batch' : 'MEAN Stack Web Development',
    },
    {
      'value' : 'GoLang',
      'batch' : 'GoLang'
    }
  ];
  constructor(private formBuilder: FormBuilder) { 
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
      selectBatch : ['',Validators.required],
      payment : '',
      // Add more form controls and validators as needed 
    });
  }



  ngOnInit(): void {
  }
  
}

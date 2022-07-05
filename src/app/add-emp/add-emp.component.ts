import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  mess: string='';
  emp_id: string='';
  first_name: string='';
  last_name: string='';
  designation: string='';
  address: string='';
  phone_num: string='';
  email: string='';

  constructor(private router:Router,private uservice: UserServiceService,private formBuilder:FormBuilder) { }

  empidPattern="^([0-9]|[1-2][0-9]|[3][0-5])$";
  FirstNamePattern="^[a-zA-Z ]{3,10}$";
  LastNamePattern="^[a-zA-Z ]{1,10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobnumPatternPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  AddressPattern = "^[a-zA-Z0-9 /-@]{10,100}$";
  DisignationPattern = "^[a-zA-Z ]{10,100}$";    

  ngOnInit(): void { 
  }
  
  get regCard() {
    return this.loginfrm.controls;
  }
  isFormSaved = false;
  saveCardDetails()
  {
    this.isFormSaved = true;
    if (this.loginfrm.invalid) {
    return;
    }
    console.log('Form has Been Saved Successfully' + JSON.stringify(this.loginfrm.value.FirstName));
    this.getDataFormAPI();
  }
  loginfrm = new FormGroup({
    emp_id: new FormControl('', [Validators.required, Validators.pattern(this.empidPattern)]),
    first_name: new FormControl('', [Validators.required, Validators.pattern(this.FirstNamePattern)]),
    last_name: new FormControl('', [Validators.required, Validators.pattern(this.LastNamePattern)]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    phone_num: new FormControl('', [Validators.required, Validators.pattern(this.mobnumPatternPattern)]),
    address: new FormControl('', [Validators.required, Validators.pattern(this.AddressPattern)]),
    gender: new FormControl('',[Validators.required]),
    designation: new FormControl('', [Validators.required, Validators.pattern(this.DisignationPattern)])
  })
message:string='';
  getDataFormAPI(){
    this.uservice.getData('api/addEmp/?emp_id=' + this.loginfrm.value.emp_id + '&first_name=' + this.loginfrm.value.first_name + 
    '&last_name=' + this.loginfrm.value.last_name + '&email=' + this.loginfrm.value.email + '&phone_num=' + 
    this.loginfrm.value.phone_num + '&address=' + this.loginfrm.value.address +
     '&gender=' + this.loginfrm.value.gender + '&designation=' + this.loginfrm.value.designation).subscribe((response) => {
      
        console.log('Its Working', response);
        this.message = JSON.stringify(response);
       
    }, (error) => {
      this.message=error;
      console.log('It is a error', error);
    })
    console.log(this.loginfrm.value.designation)
  }
  
}
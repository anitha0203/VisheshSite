import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user.service';
import { FormControl, FormGroup,FormBuilder,Validators, NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

/*  constructor(private router: Router,private uservice: UserServiceService,private formBuilder:FormBuilder) { }

  message: any;
  ngOnInit(): void {
  }

  updateVal = new FormGroup({
    emp_id: new FormControl(),
  })
  getDataFormAPI(){
    this.uservice.getData('api/checkEmp/?emp_id=' + this.updateVal.value.emp_id ).subscribe((response) => {
       
        console.log('Its Working', response);
        this.message = JSON.stringify(response);
       
    }, (error) => {
      this.message=error;
      console.log('It is a error', error);
    })
    console.log(this.updateVal.value.designation)
  }

  listpage(){
    this.router.navigate([`emp-list`])
  }*/
  constructor(private uservice: UserServiceService) { }

  ngOnInit(): void {
  }
  users:any;
  first_name:any;last_name:any;address:any;phone_num:any;gender:any;designation:any;email:any;
  users2={first_name:'',last_name:'',email:'',phone_num:'',address:'',gender:'',designation:''}
  mess=false;
  message:string='';
  user1:string='';
  emp_id:any;
  element:any;

  getDataFormAPI(){
    console.log(this.emp_id);
    this.uservice.getData('api/checkEmp?emp_id='+this.emp_id).subscribe((response) => {
       if(response=="0")
       {
          this.message = "Please enter employee id";
          console.log(this.message);
       }
       else if(response=="1")
       {
          this.message = "There is no employee id";
          console.log(this.message);
       }
       else
       {
          this.mess=true;
          this.user1 = JSON.stringify(response);
          this.users = JSON.parse(this.user1); 
          this.uservice.getData1(this.users);
          this.setData();
         // console.log(this.users);   
       }
    }, (error) => {
      console.log('It is a error');
    })
  }
  data3:any;
  setData(){
    this.data3 = this.uservice.postData();
    this.data3.forEach((element: any) => {
      /*  console.log(element.first_name);
        this.fname = element.first_name;
        this.lname = element.last_name;
        this.ema = element.email;
        this.phn = element.phone_num;
        this.addr = element.address;
        this.gen = element.gender;
        this.des = element.designation;*/
        this.users2.first_name = element.first_name;
        this.users2.last_name = element.last_name;
        this.users2.email = element.email;
        this.users2.phone_num = element.phone_num;
        this.users2.address = element.address;
        this.users2.gender = element.gender;
        this.users2.designation = element.designation;
        console.log(this.users2.first_name + "  " + this.users2.last_name + "  " + this.users2.email + "  " + this.users2.phone_num + "  " + this.users2.address + "  " + this.users2.gender + "  " + this.users2.designation );
    });
   // console.log(this.users2.first_name);
  //  this.loginfrm.setValue({
        
  //  });
  }

 /* FirstNamePattern="^[a-zA-Z ]{3,10}$";
  LastNamePattern="^[a-zA-Z ]{1,10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  AddressPattern = "^[a-zA-Z0-9 /-@]{5,100}$";
  DisignationPattern = "^[a-zA-Z ]{10,100}$";

  loginfrm = new FormGroup({ 
    first_name: new FormControl('', [Validators.required, Validators.pattern(this.FirstNamePattern)]),
    last_name: new FormControl(null, [Validators.required, Validators.pattern(this.LastNamePattern)]),
    email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
    phone_num: new FormControl(null, [Validators.required, Validators.pattern(this.mobnumPattern)]),
    address: new FormControl(null, [Validators.required, Validators.pattern(this.AddressPattern)]),
    gender: new FormControl(null, [Validators.required]),
    designation: new FormControl(null, [Validators.required, Validators.pattern(this.DisignationPattern)])
  })*/
  /*loginfrm = new FormGroup({ 
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    phone_num: new FormControl(''),
    address: new FormControl(''),
    gender: new FormControl(''),
    designation: new FormControl('')
  })*/
  /*isFormSaved = false;
  saveCardDetails() {
    this.isFormSaved = true;
    if (this.loginfrm.invalid) {
      return ;
    }
    console.log('Form has Been Saved Successfully' + JSON.stringify(this.loginfrm.value.FirstName));
    this.getDataFormAPI2();
  }*/


  getDataFormAPI2(){
   // console.log(this.uservice.postData());
      this.uservice.getData('api/update/?emp_id=' + this.emp_id + '&first_name=' + this.first_name + 
        '&last_name=' + this.last_name + '&email=' + this.email + '&phone_num=' + 
        this.phone_num + '&address=' + this.address +
         '&gender=' + this.gender + '&designation=' + this.designation).subscribe((response) => {
      if(response==1){
          alert("sucessfully added Details");
          window.location.reload();
      }
      else if(response==0)
      {
          alert("your Employee Id is Duplicate");
      }
      else
      {
          this.message = JSON.stringify(response);
          alert(this.message);
      }
    }, (error) => {
          alert(error);
    })
  }

/*  get regCard() {
      return this.loginfrm.controls;
  }*/
}

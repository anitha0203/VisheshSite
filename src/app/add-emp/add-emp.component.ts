import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  mess: string='';
  constructor(private router:Router,private uservice: UserServiceService) { }

  ngOnInit(): void {
  }

  loginfrm = new FormGroup({
    emp_id: new FormControl(),
    first_name: new FormControl(),
    last_name: new FormControl(),
    email: new FormControl(),
    phone_num: new FormControl(),
    address: new FormControl(),
    gender: new FormControl(),
    designation: new FormControl()
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
      console.log('It is a error', error);
    })
  console.log(this.loginfrm.value.designation)
  }

  onSubmit(): void{
  this.getDataFormAPI();
  }


}

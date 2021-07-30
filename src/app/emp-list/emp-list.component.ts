import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private router:Router,private formBuilder: FormBuilder,private uservice: UserServiceService) { }
  
   users = [{emp_id:'', first_name:'', last_name:'', email:'', phone_num:'', address:'',gender:'',designation:''}]

//emp_id, first_name, last_name, email, phone_num, address, gender, designation
  ngOnInit(): void {
    this.getDataFormAPI();

  }


  user1:string='';
  getDataFormAPI(){
    this.uservice.getData('api/getEmpList').subscribe((response) => {
       
      //  console.log('Its Working', response);
        this.user1 = JSON.stringify(response);
      //  console.log('users values' + this.user1);
        this.users = JSON.parse(this.user1);
      //  this.message = "Details are submitted";
    }, (error) => {
      console.log('It is a error', error);
    })
}
}
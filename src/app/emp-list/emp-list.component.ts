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

  message:any;
  user1:string='';
  getDataFormAPI(){
    this.uservice.getData('api/getEmpList').subscribe((response) => {
      console.log("this is res  "+response)
       if(response=="1")
       {
          this.message = "There is no employees table";
       }
       else if(response=="2")
       {
          this.message = "There is no data found in employees table";
       }
       else
       {
          this.user1 = JSON.stringify(response);
          this.users = JSON.parse(this.user1);
          console.log("this is users",this.users)
       }

    }, (error) => {
      console.log('It is a error');
    })
  }

  updatepage(){
    this.router.navigate([`update`]);
  }
  deleteEmp(){
    this.router.navigate([`delete-emp`]);
  }
}

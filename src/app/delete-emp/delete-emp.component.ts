import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user.service';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit {

  constructor(private uservice: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  
  emp_id:any;
  message:any;
  getDataFormAPI2(){
       this.uservice.getData('api/deleteEmp/?emp_id=' + this.emp_id ).subscribe((response) => {
       if(response==1){
           alert("sucessfully deleted Employee details");
          // this.router.navigate([`emp_list`]);         
           window.location.reload();
       }
       else if(response==2)
       {
           this.message = "Please enter correct employee id";
       }
       else
       {
           this.message = "Please enter employee id";
       }            
     }, (error) => {  
           alert(error);
     }) 
   }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user.service';

@Component({
  selector: 'app-attend',
  templateUrl: './attend.component.html',
  styleUrls: ['./attend.component.css']
})
export class AttendComponent implements OnInit {
  users: any;
  mess= false;
  emp_id: any;
  val: any;
  message: string | undefined;
  user1: string | undefined;

  constructor(private router:Router,private uservice: UserServiceService) { }

  ngOnInit(): void {
  }

  getData(){
    console.log(this.val + '  ' + this.emp_id);
    this.uservice.getData('api/checkEmp?emp_id='+this.emp_id).subscribe((response) => {
       if(response=="0")
       {
          this.message = "Please enter employee id";
         // console.log(this.message);
       }
       else if(response=="1")
       {
          this.message = "There is no employee id";
        //  console.log(this.message);
       }
       else
       {
          if(this.val==1)
          {
            this.uservice.postAttend('api/attend?emp_id='+this.emp_id+'&val=present').subscribe((response) => {
              console.log("Success");
            }, (error) => {
              console.log("Failed");
            })
          }
          else
          {
            this.uservice.postAttend('api/attend?emp_id='+this.emp_id+'&val=absent').subscribe((response) => {
              console.log("Success");
            }, (error) => {
              console.log("Failed");
            })
          }
          alert("Submitted");
          window.location.reload();
       }
    }, (error) => {
      console.log('It is a error');
    })
  }

}

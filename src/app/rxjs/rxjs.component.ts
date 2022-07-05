import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myOb = new Observable(function(x){
    x.next("It is observale example1......")
    setTimeout(function(){
    x.next("It is observale example2......")
    x.next("It is observale example3......")
    x.next("It is observale example4......")
    x.complete();},5000)
 })
//heroes=["NTR","Charan","Prabhas","Nani"]
heroes=[1,2,3,4]
 clb(){
    this.myOb.subscribe({
      next(x){  console.log(x)   },
      error(){     	console.log("this is error")	},
      complete(){     	console.log("this is completed")	}
    })
   // subs.unsubscribe();
    console.log("this is outside1")
    console.log("this is outside2")
    of(10, 20, 30)
     .subscribe(
       next => console.log('next:', next),
       err => console.log('error:', err),
       () => console.log('the end'),
     );
    from(this.heroes).pipe(map(x=>x.toString().toUpperCase())).subscribe( function(p1)  {     console.log(p1);   })
    of(this.heroes).subscribe(   function(p1)  {     console.log(p1);   })
    of(this.heroes).subscribe(   p1 =>  {     console.log(p1);   })
    
    of(1,2,3).pipe(map(p1=>p1*2)).subscribe(   p1 =>  {     console.log(p1);   })
    from('2').pipe(map(p1=>p1)).subscribe(   p1 =>  {     console.log(p1);   })
 }

}

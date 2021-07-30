import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vishesh';
  constructor(private router:Router){
    this.router.navigate([`about`]);
  }

  homepage() : void {
    this.router.navigate([`home`]);
  }
  aboutpage() : void {
    this.router.navigate([`about`]);
  }  
  listpage() : void {
    this.router.navigate([`emp-list`]);
  }
  addpage() : void {
    this.router.navigate([`add-emp`]);
  }
  bookpage() : void {
    this.router.navigate([`book-list`]);
  }
}

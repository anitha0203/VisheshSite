import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  create1=true;
  digi1=false;
  gene1=false;
  stk1=false;
  create(){
    this.create1=true;
    this.digi1=false;
    this.gene1=false;
    this.stk1=false;
  }
  digit(){
    this.create1=false;
    this.digi1=true;
    this.gene1=false;
    this.stk1=false;
  }
  gener(){
    this.create1=false;
    this.digi1=false;
    this.gene1=true;
    this.stk1=false;
  }
  stack(){
    this.create1=false;
    this.digi1=false;
    this.gene1=false;
    this.stk1=true;
  }

}

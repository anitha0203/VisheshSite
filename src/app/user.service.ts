import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }


  getData(url : string){
    return this.http.get(url);
  }
  users5: any;
  getData1(arr: string[]){
      this.users5 = arr;
      console.log(this.users5);
  }
  postData(){
    return this.users5;
  }

 /* getData1(){
    return this.http.get('/api/getEmpList')
  }*/

  getData2(url: any){
    return this.http.get('/api/url');
  }
  postAttend(url: string){
    return this.http.get(url);
  }

}

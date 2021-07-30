import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getData(url : string){
    return this.http.get(url )
  }

 /* getData1(){
    return this.http.get('/api/getEmpList')
  }*/

}

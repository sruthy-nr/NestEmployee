import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addEmployee=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/addemployee",dataToSend)
  }
  empLogin=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/emplogin",dataToSend)
  }
  getProfile=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/profileview",dataToSend)
  }
  addTask=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/addtask",dataToSend)
  }
  viewEmployee=()=>{
    return this.http.get("http://localhost:8080/viewemployee")
  }
  userViewTask=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/userviewtask",dataToSend)
  }
  updateStatus=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/updatestatus",dataToSend)
  }
}

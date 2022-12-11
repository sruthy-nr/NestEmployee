import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empcode=""
  empname=""
  designation=""
  salary=""
  phone=""
  email=""
  password=""
  
  constructor(private api:ApiService,private route:Router){}
  readValues=()=>{
    let data:any={
      "empcode":this.empcode,
      "empname":this.empname,
      "designation":this.designation,
      "salary":this.salary,
      "phone":this.phone,
      "email":this.email,
      "password":this.password

    }
    console.log(data)
    if(this.password != "" && this.email != ""){
    this.api.addEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Added Successfully")
          this.empcode=""
          this.empname=""
          this.designation=""
          this.salary=""
          this.phone=""
          this.email=""
          this.password=""
          this.route.navigate(['/viewemployee'])
        } 
        else {
          alert("Something went wrong")
        }
      }
    )
  }
  else{
    alert("Empty fields")
  
  }
}

}

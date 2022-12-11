import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent {

  email=""
  password=""
  searchUser:any=[]

  constructor(private api:ApiService,private route:Router){}
  readValues=()=>
  {
    let data:any={"email":this.email,"password":this.password}
    console.log(data)
    this.api.empLogin(data).subscribe(

      (response:any)=>{

        console.log(response)

        if (response.length==0) {
          alert("Invalid credentials")
          this.email=""
          this.password=""
        }
         else {
          this.searchUser=response;
          let id=response.userid
          console.log(id)
          localStorage.setItem("userinfo",id)
          this.route.navigate(['/profile'])
        }

      }
      )
    }
}

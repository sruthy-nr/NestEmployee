import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent {

  
  constructor(private api:ApiService,private route:Router){}
  task=""
  empid:any=""
  searchdata:any=[]
  readValues=()=>{
    this.empid=localStorage.getItem("userinfo")
    let data:any={
      "empid":this.empid,
      "task":this.task
    }
    console.log(data)
    this.api.userViewTask(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
  
          alert("No tasks for you")
          
        } else {
          this.searchdata=response
        }
      }
    )
  }
  status="Completed"
  update=(id:any)=>{

    let data:any={
      "empid":id,
      "status":this.status
    }
    this.api.updateStatus(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
  
          alert("Updated");
          this.route.navigate(['/viewtask'])
        } 
        else {
        
          alert("invalid input");
        }
      }
    )
  
  }
  
}

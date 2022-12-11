import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {


  empid=""
  task=""
  status="Not completed"
  
  constructor(private api:ApiService,private route:Router){}
  readValues=()=>{
    let data:any={
      "empid":this.empid,
      "task":this.task,
      "status":this.status

    }
    console.log(data)
    this.api.addTask(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Added Successfully")
          this.empid=""
          this.task=""
          this.status=""
          
          this.route.navigate(['/dash'])
        } 
        else {
          alert("Something went wrong")
        }
      }
    )
 
}


}

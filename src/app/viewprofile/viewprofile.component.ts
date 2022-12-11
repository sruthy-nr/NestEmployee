import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent {

  id:any=""
constructor(private api:ApiService){
  this.id=localStorage.getItem("userinfo")
  let data:any={
    "id":this.id
  }
  console.log(data)
  this.api.getProfile(data).subscribe(
    (response:any)=>{
      console.log(response)
      this.data=response
    }
  )
}
data:any=[]
}

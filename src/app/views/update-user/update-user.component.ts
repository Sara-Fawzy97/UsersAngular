import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/userInterface';
import { SingleUserService } from '../../services/single-user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
user:User={}
  constructor(private userService:SingleUserService, private route:ActivatedRoute) { }
id:string=this.route.snapshot.params['id']

  getSingleUser(){
    this.userService.getSingleUser(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.user=res
      }
    })
  }
  updateUser(user:User){
    this.userService.updateUser(this.id,user).subscribe({
      next:()=>{
        console.log(user)
        
      }
    })
  }
  ngOnInit(): void {
   this.getSingleUser()
  }


}

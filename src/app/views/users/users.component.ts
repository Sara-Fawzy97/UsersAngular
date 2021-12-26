import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/userInterface';
import { SingleUserService } from 'src/app/services/single-user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:User[]=[]


  constructor(private userService:SingleUserService) { }
 
getUsers(){
  this.userService.getUsers().subscribe({

    next:(res:any)=>{
console.log(res)
this.users=res
    },
    error:(error:any)=>{
      console.log(error)
    }
  })
}
 
  ngOnInit(): void {
    this.getUsers()
  }

}

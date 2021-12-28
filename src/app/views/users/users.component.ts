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

addUsers(user:any){
  this.userService.addUser(user).subscribe({
    next:()=>{
      console.log(user)
      this.users.splice(0,0,user)
    }
  })
}
//  id,index
deleteUser(user:any,i:number){
this.userService.deleteUser(user).subscribe({
  next:()=>{
this.users.splice(i,1)
  }
})
}
  ngOnInit(): void {
    this.getUsers()
  }

}

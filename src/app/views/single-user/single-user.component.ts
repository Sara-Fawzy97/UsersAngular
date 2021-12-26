import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/userInterface';
import { SingleUserService } from 'src/app/services/single-user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})

export class SingleUserComponent implements OnInit {
// id:string=
  constructor(private userService:SingleUserService,private router:ActivatedRoute ) { }
id:string=this.router.snapshot.params['id']

users:User={}

getSingleUser(){
  console.log(this.id)
  this.userService.getSingleUser(this.id).subscribe({

    next:(res:any)=>{
      console.log(res)
      this.users=res
    },

  })
}



  ngOnInit(): void {
    this.getSingleUser()
  }

}

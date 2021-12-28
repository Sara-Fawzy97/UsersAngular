import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class SingleUserService {

url="https://jsonplaceholder.typicode.com/users/"
  constructor(private http:HttpClient) { }

  getUsers(){
return this.http.get<User[]>(this.url)
  }

  getSingleUser(id:string){
    return this.http.get(this.url+id)
  }


  addUser(user:User){
    return this.http.post(this.url,user)
    
  }

  deleteUser(id:any){
    return this.http.delete(this.url + id)
  }

  updateUser(id:any, body:User){
    return this.http.patch(this.url+id,body)
  }
}


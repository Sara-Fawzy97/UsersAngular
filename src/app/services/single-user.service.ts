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
}


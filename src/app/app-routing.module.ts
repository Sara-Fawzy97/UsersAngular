import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './views/users/users.component';
import { SingleUserComponent } from './views/single-user/single-user.component'; 

const routes: Routes = [
  {path:'',component:UsersComponent}, //to display all users
  {path:'singleUser/:id',component:SingleUserComponent} //to display one user by his id 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './views/users/users.component';
import { SingleUserComponent } from './views/single-user/single-user.component';
import { SingleUserService } from './services/single-user.service';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [SingleUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

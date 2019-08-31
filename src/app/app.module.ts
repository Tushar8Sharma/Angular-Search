import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigateCOmponentComponent } from './navigate-component/navigate-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { FunctionCall } from '@angular/compiler';
import { FollowerComponent } from './follower/follower.component';
import { PostComponent } from './post/post.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavigateCOmponentComponent,
    HomeComponentComponent,
    NotFoundComponentComponent,
    PostComponent,
    
    FollowerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path : '', 
        component : HomeComponentComponent
      },
      {
        path:'followers/:username',
        component:FollowerComponent 
      },
      {
        path :'followers' , 
        component : FollowerComponent
      },
     
      {
        path:'posts',
        component:PostComponent 
      },
      {
        path:'**',
        component:NotFoundComponentComponent 
      }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

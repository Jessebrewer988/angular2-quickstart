import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { PostsComponent } from './components/posts.component';
import { routing } from './app.routing.js';

@NgModule({
  declarations: [AppComponent, UserComponent, AboutComponent, PostsComponent],
  imports: [ BrowserModule, FormsModule, HttpModule, routing ],
  providers: [],
  bootstrap: [AppComponent, ]
})

export class AppModule {
}
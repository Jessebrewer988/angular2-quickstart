import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <div class="nav navbar-expand-lg navbar-light p-3">
        <li class="nav-item">
          <a class="nav-link" routerLink="/" routerLinkActive="router-link-active" [routerLinkActiveOptions]="{exact:
            true}">Home</a> 
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/posts" routerLinkActive="router-link-active">Posts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/about" routerLinkActive="router-link-active">About</a>
        </li>
      </div>
      <router-outlet></router-outlet>
  `,
})
export class AppComponent {

}
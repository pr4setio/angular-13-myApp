import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { AuthenticationService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  existingUser: User;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.existingUser.subscribe(x => this.existingUser = x);
}
logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}
}

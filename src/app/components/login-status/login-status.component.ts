import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js'

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated: boolean = false;
  userFullname: string = "";

  storage: Storage = sessionStorage;

  constructor(private OktaAuthService: OktaAuthStateService,
              @Inject(OKTA_AUTH) private oktaAuth: OktaAuth ) { }

  ngOnInit(): void {

    // Subscribe to authentication state changes
    this.OktaAuthService.authState$.subscribe(
      (result) => {
        this.isAuthenticated = result.isAuthenticated as boolean;
        this.getUserDetail();
      }
    )
  }

  getUserDetail() {
    if (this.isAuthenticated) {

      // Fetch the logged in user details
      this.oktaAuth.getUser().then(
        (result) => {
          this.userFullname = result.name as string;

          const theEmail = result.email;
          this.storage.setItem('userEmail', JSON.stringify(theEmail));
        }
      );
    }
  }

  logout() {
    // terminates the session with Okta and removes current token
    this.oktaAuth.signOut();
  }

}

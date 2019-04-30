import { Component } from '@angular/core';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Data: any;
  id: any;
  name:any;
  email: any;
  photoUrl:any;

  constructor(private authService: AuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData)=>{
        this.Data = userData;
        this.id = userData.id;
        this.name = userData.name;
        this.email = userData.email;
        this.photoUrl = userData.photoUrl;
      }
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (userData)=>{
        this.Data = userData;
        this.id = userData.id;
        this.name = userData.name;
        this.email = userData.email;
        this.photoUrl = userData.photoUrl;
      }
    );
  }



  signOut(): void {
    this.authService.signOut();
  }



}

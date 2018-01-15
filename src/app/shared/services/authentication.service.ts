import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthenticationService {
  token = null;

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  logInUser(email: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then((response) => {
          this.router.navigate(['/blog-create']);
          this.afAuth.auth.currentUser.getIdToken()
          .then((token: string) => this.token = token);
          })
          .catch((error) => console.log(error));
  }

  logOutUser(): void {
    this.afAuth.auth.signOut().then((response) => {
      this.router.navigate(['/home']);
    })
    .catch((error) => console.log(error));
    this.token = null;
  }

  getIdToken(): string {
    this.afAuth.auth.currentUser.getIdToken()
            .then((token: string) => this.token = token);
            return this.token;
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }

}

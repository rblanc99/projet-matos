import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;
  loading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(form: NgForm) {
    const mail = form.value.mail;
    this.loading = true;
    this.authService.signIn(mail).then(
      () => {
        console.log('connexion réussie !');
        this.authStatus = this.authService.isAuth;
        this.loading = false;
        this.router.navigate(['appareils']);
      },
      () => {
        this.loading = false;
        alert('Erreur de connexion !');
        console.log('erreur de connexion...');
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    console.log('Vous vous êtes bien déconnecté');
    this.authStatus = this.authService.isAuth;
  }

  getUserFromSignIn() {
    const currentUser = this.authService.getCurrentUser();
    return currentUser.prenom + ' ' + currentUser.nom + ' !' ;
  }


}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-user',
  templateUrl: './nouvel-user.component.html',
  styleUrls: ['./nouvel-user.component.css']
})
export class NouvelUserComponent implements OnInit {

  users: any[];


  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.users = this.authService.getUsers();
  }

  onAddUser(form: NgForm) {
    const newPrenom = form.value.prenom;
    const newNom = form.value.nom;
    const newMail = form.value.mail;
    const newId = this.users[this.users.length - 1].id + 1;
    const newUser = {id: newId, prenom: newPrenom, nom: newNom, mail: newMail};
    this.authService.addUser(newUser);
    this.route.navigate(['users']);

  }
}

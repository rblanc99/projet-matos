import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-users',
  templateUrl: './liste-users.component.html',
  styleUrls: ['./liste-users.component.css']
})
export class ListeUsersComponent implements OnInit {

  users: any[];
  usersReq: any[];
  isSearchOn = false;

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.users = this.authService.getUsers();
  }

  onAddUser(form: NgForm) {
    const newPrenom = form.value.prenom;
    const newNom = form.value.nom;
    const newMail = form.value.mail;
    const newId = this.users[this.users.length + 1];
    const newUser = {id: newId, prenom: newPrenom, nom: newNom, mail: newMail};
    this.authService.addUser(newUser);
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  onDeleteUser(user) {
    this.authService.deleteUser(user.id);
    this.isSearchOn = false;
  }

  onResearch(form) {
    const req = form.value.search;
    if (req !== '') {
      const usersReq = this.users.filter(
        (appareilObject) => {
          const condition = appareilObject.prenom.slice(0, req.length).toLowerCase() === req.toLowerCase()
                 || appareilObject.nom.slice(0, req.length).toLowerCase() === req.toLowerCase();
          return (condition && appareilObject.id !== -1);
        }
      );
      this.usersReq = usersReq;
      this.isSearchOn = true;
    } else {
      this.isSearchOn = false;
    }
  }

}

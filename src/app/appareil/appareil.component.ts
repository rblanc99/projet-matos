import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() name: string;
  @Input() status: number;
  @Input() id: number;
  @Input() index: number;
  @Input() emprunterId: number;
  @Input() vrainom: string;

  currentUser: any;
  emprunteur: any;

  constructor(private authService: AuthService, private appareilService: AppareilService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }

  onEmprunter() {
    this.appareilService.emprunter(this.index, this.currentUser.id);
    this.emprunteur = this.authService.getUserById(this.emprunterId);
  }

  onRendre() {
    this.appareilService.rendre(this.index, this.currentUser.id);
  }

  onDelete() {
    this.appareilService.delete(this.index);
  }

  getColor() {
    if (this.status) {
      return 'green';
    }
    if (!this.status) {
      return 'red';
    }
  }

  getEmprunteur() {
    return this.authService.getUserById(this.emprunterId).prenom;
  }

  getStatus() {
    if (this.status) {
      return 'Disponible';
    } else {
      return 'Emprunté';
    }
  }

  getAuth() {
    return this.authService.isAuth;
  }

  isRendrePossible() {
    return (this.emprunterId === this.currentUser.id) || this.isAdmin();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }
}

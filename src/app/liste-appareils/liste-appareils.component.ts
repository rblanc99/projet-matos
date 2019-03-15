import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-liste-appareils',
  templateUrl: './liste-appareils.component.html',
  styleUrls: ['./liste-appareils.component.css']
})
export class ListeAppareilsComponent implements OnInit {

 appareils: any[];
 currentUser: any;

  constructor(private appareilService: AppareilService, private authService: AuthService) { }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
    this.currentUser = this.authService.getCurrentUser();
  }


  onToutRendre() {
    this.appareilService.toutRendre(this.currentUser.id);
  }

  onToutEmprunter() {
    this.appareilService.toutEmprunter(this.currentUser.id);
  }

  onReceive() {
    this.appareilService.saveAppareilsToServer();
  }

  getAuth() {
    return this.authService.getAuth();
  }
}

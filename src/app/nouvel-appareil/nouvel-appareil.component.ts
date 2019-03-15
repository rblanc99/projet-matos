import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nouvel-appareil',
  templateUrl: './nouvel-appareil.component.html',
  styleUrls: ['./nouvel-appareil.component.css']
})
export class NouvelAppareilComponent implements OnInit {

  constructor(private appareilService: AppareilService, private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const statut = form.value.statut;
    const vrainom = form.value.vrainom;
    const emprunterId = this.authService.getCurrentUser().id;
    this.appareilService.nouvelAppareil(name, statut, vrainom, emprunterId);
    this.route.navigate(['/appareils']);
  }

}

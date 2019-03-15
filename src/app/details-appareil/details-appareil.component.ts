import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-details-appareil',
  templateUrl: './details-appareil.component.html',
  styleUrls: ['./details-appareil.component.css']
})
export class DetailsAppareilComponent implements OnInit, OnDestroy {

  appareil: any;
  nom: string;
  statut: boolean;
  id: number;
  vrainom: string;
  modif = false;
  lastUpdate = new Date();

  constructor(private appareilService: AppareilService, private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.appareil = this.appareilService.getAppareilById(+id);
    this.nom = this.appareil.nom;
    this.statut = this.appareil.statut;
    this.id = this.appareil.id;
    this.vrainom = this.appareil.vrainom;
  }

  ngOnDestroy() {
    this.appareil.nom = this.nom;
    this.appareil.vrainom = this.vrainom;
    this.appareilService.setAppareilById(this.id, this.appareil);
  }


  getStatus() {
    if (this.statut) {
      return 'Disponible';
    } else {
      return 'Emprunté';
    }
  }

  onModifier() {
    this.modif = true;
  }

  onDemodifier() {
    this.modif = false;
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  getColor() {
    if (this.statut) {
      return 'green';
    }
    if (!this.statut) {
      return 'red';
    }
  }

}

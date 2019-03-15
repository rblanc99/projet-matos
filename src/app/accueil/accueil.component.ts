import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  title = 'Le site du Matos';
  isAuth = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAuth = this.authService.getAuth();
  }

}

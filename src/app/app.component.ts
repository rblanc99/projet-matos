import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Le Site Du Matos';

  isSearchBarOn = false;
  isSearchOn = false;
  usersReq: any[];

  constructor(private appareilService: AppareilService, private authService: AuthService, private route: Router) {

  }

  ngOnInit() {
    this.appareilService.getAppareilsFromServer();
    this.authService.getUsersFromServer();
  }

  onSearch() {
    this.route.navigate(['search']);
  }


  isAdmin() {
    return this.authService.isAdmin();
  }

  onResearch(form) {
    this.isSearchBarOn = false;
  }
}


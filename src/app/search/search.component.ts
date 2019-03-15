import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  usersReq: any[];
  isSearchOn = false;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  onResearch(form) {
    const req = form.value.search;
    if (req !== '') {
      const usersReq = this.appareilService.appareils.filter(
        (appareilObject) => {
          return appareilObject.nom.slice(0, req.length).toLowerCase() === req.toLowerCase();
        }
      );
      this.usersReq = usersReq;
      this.isSearchOn = true;
    } else {
      this.isSearchOn = false;
    }

  }
}

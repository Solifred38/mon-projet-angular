import {AppareilService} from './services/appareil.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }
    );
  });
  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }
    );
  }
  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
  onAllumer() {
    console.log('On allume tout !');
    this.appareils = [
      {
        name: 'Machine à laver',
        status: 'allumé'
      },
      {
        name: 'Frigo',
        status: 'allumé'
      },
      {
        name: 'Ordinateur',
        status: 'allumé'
      }
    ];
  }
  onEteindre() {
    console.log('On éteint tout !');
    this.appareils = [
      {
        name: 'Machine à laver',
        status: 'éteint'
      },
      {
        name: 'Frigo',
        status: 'éteint'
      },
      {
        name: 'Ordinateur',
        status: 'éteint'
      }
    ];
  }
}

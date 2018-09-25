import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }
    );
  });
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }
    );
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

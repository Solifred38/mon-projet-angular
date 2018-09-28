import {AppareilService} from './services/appareil.service';
import {Component, OnInit} from '@angular/core';
import {AppareilViewComponent} from './appareil-view/appareil-view.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  

  appareils: any[];

  constructor(private appareilService: AppareilService) {
    
  }
  ngOnInit() {
    
  }
  
}

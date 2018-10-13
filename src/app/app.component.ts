import {AppareilService} from './services/appareil.service';
import {Component, OnInit, Input} from '@angular/core';
import {AppareilViewComponent} from './appareil-view/appareil-view.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;
  appareils: any[];

  constructor(private appareilService: AppareilService) {
  }
  ngOnInit() {
  }

}

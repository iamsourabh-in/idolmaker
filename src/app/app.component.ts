import { Component } from '@angular/core';
import { HttpMetaInfoService } from './services/HttpMetaInfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'idolmaker';

  constructor(private _metaInfoService: HttpMetaInfoService) {
    this._metaInfoService.getMetaInfo('https://angular.io/');

  }


}

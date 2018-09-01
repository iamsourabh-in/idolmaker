import { Component, OnInit } from '@angular/core';
import { BrowserBridgeService } from '../../../../services/BrowserBridge.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css'],
})
export class LeftNavComponent implements OnInit {

  constructor(private _window: BrowserBridgeService) { }

  ngOnInit() {
    // this._window.body.init();
  }

  open() {
    this._window.body.init();
  }

}

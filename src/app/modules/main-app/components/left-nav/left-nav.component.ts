import { Component, OnInit } from '@angular/core';
import { BrowserBridgeService } from '../../../../services/BrowserBridge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css'],
})
export class LeftNavComponent implements OnInit {

  constructor(private _window: BrowserBridgeService, private _router: Router) { }

  ngOnInit() {
    // this._window.body.init();
  }

  openSideNav() {
    this._window.body.init();
  }
  routeTo(route: string) {
    this._router.navigate(['home/' + route]);
    this._window.body.closeSideBar();
  }

}

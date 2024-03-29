import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, AppRoutingComponents } from './app.routing.module';
import { AccountModule } from './modules/account/account.module';
import { BrowserBridgeService } from './services/BrowserBridge.service';
import { MainAppModule } from './modules/main-app/main-app.module';

import { HttpMetaInfoService } from './services/HttpMetaInfo.service';
import { AppCommonModule } from './modules/app-common/app-common.module';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    ...AppRoutingComponents,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppCommonModule,
    AccountModule,
    MainAppModule
  ],
  providers: [BrowserBridgeService, HttpMetaInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

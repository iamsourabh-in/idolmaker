import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, AppRoutingComponents } from './app.routing.module';
import { AccountModule } from './modules/account/account.module';
import { BrowserBridgeService } from './services/BrowserBridge.service';
import { MainAppModule } from './modules/main-app/main-app.module';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpMetaInfoService } from './services/HttpMetaInfo.service';

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
    AccountModule,
    MainAppModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    })
  ],
  providers: [BrowserBridgeService, HttpMetaInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, AppRoutingComponents } from './app.routing.module';
import { AccountModule } from './modules/account/account.module';
import { BrowserBridgeService } from './services/BrowserBridge.service';
import { MainAppModule } from './modules/main-app/main-app.module';


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
    MainAppModule
  ],
  providers: [BrowserBridgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule, AppRoutingComponents } from './app.routing.module';
import { AccountModule } from './modules/account/account.module';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BrowserBridgeService } from './services/BrowserBridge.service';


@NgModule({
  declarations: [
    AppComponent,
    ...AppRoutingComponents,
    LeftNavComponent,
    RightBarComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AccountModule
  ],
  providers: [BrowserBridgeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

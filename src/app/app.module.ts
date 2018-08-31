import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule, AppRoutingComponents } from './app.routing.module';
import { AccountModule } from './modules/account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    ...AppRoutingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

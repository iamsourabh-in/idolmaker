import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainAppRoutingComponents, MainAppRoutingModule } from './main-app.routing.modules';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { UserImagesComponent } from './user-images/user-images.component';
import { UserVideosComponent } from './user-videos/user-videos.component';
import { UserAboutComponent } from './user-about/user-about.component';

@NgModule({
  imports: [
    CommonModule,
    MainAppRoutingModule
  ],
  declarations: [...MainAppRoutingComponents, LeftNavComponent,
    RightBarComponent,
    TopBarComponent,
    UserImagesComponent,
    UserVideosComponent,
    UserAboutComponent,
  ]
})
export class MainAppModule { }

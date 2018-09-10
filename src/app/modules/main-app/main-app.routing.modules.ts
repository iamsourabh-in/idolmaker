import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { FriendsComponent } from './friends/friends.component';
import { BadgesComponent } from './badges/badges.component';
import { StatsComponent } from './stats/stats.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { CalendarWidgetComponent } from './components/calendar-widget/calendar-widget.component';
import { AddPostWidgetComponent } from './components/add-post-widget/add-post-widget.component';
import { SettingsComponent } from './settings/settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTimelineComponent } from './user-timeline/user-timeline.component';
import { UserPhotosComponent } from './user-photos/user-photos.component';
import { UserAboutComponent } from './user-about/user-about.component';
import { UserVideosComponent } from './user-videos/user-videos.component';
import { UserImagesComponent } from './user-images/user-images.component';



const routes: Routes = [
    { path: 'home', redirectTo: '/home/feeds', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent,
        children: [
            {
                path: 'feeds',
                component: NewsFeedComponent,
            },
            {
                path: 'friends',
                component: FriendsComponent,
            },
            {
                path: 'badges',
                component: BadgesComponent,
            },
            {
                path: 'stats',
                component: StatsComponent,
            },
            {
                path: 'settings',
                component: SettingsComponent,
            },
            {
                path: 'profile/:id',
                component: UserProfileComponent,
                children: [
                    {
                        path: 'timeline',
                        component: UserTimelineComponent,
                    },
                    {
                        path: 'photos',
                        component: UserPhotosComponent,
                    },
                    {
                        path: 'about',
                        component: UserAboutComponent,
                    },
                    {
                        path: 'videos',
                        component: UserVideosComponent,
                    },
                    {
                        path: 'profile',
                        component: UserProfileComponent,
                    }
                ]
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainAppRoutingModule { }
export const MainAppRoutingComponents = [HomeComponent,
    NewsFeedComponent,
    FriendsComponent,
    BadgesComponent,
    StatsComponent,
    WeatherWidgetComponent,
    CalendarWidgetComponent,
    AddPostWidgetComponent,
    SettingsComponent,
    UserImagesComponent,
    UserVideosComponent,
    UserAboutComponent,
    UserTimelineComponent,
    UserPhotosComponent, UserProfileComponent];

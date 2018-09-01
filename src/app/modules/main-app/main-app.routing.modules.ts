import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { FriendsComponent } from './friends/friends.component';
import { BadgesComponent } from './badges/badges.component';
import { StatsComponent } from './stats/stats.component';



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
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainAppRoutingModule { }
export const MainAppRoutingComponents = [HomeComponent, NewsFeedComponent, FriendsComponent, BadgesComponent, StatsComponent];

import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Card } from './card/card';
import { Home } from './home/home';
import { SingleListview } from './single-listview/single-listview';

export const routes: Routes = [
    {path:'card' ,component:Card},
    {path:'home',component:Home},
    {path:'single-listview/:titleid',component:SingleListview}
];

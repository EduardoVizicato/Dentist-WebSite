import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {NavbarComponent} from './shared/navbar/navbar.component';

export const routes: Routes = [
  {path: '/home', component: HomeComponent},
  {path: '/navbar', component: NavbarComponent},
];

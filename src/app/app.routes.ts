import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(c => c.ProfileComponent),
    // canActivate: [authGuard] // lazy load the profile component and protect it with authGuard
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, // redirect to home if no path is provided
  {
    path: '**',
    component: PageNotFoundComponent
  } // wildcard route for a 404 page
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EcmembersComponent } from './ecmembers/ecmembers.component';
import { Durgotsav2025Component } from './durgotsav2025/durgotsav2025.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'home', component:  HomeComponent },
  { path: 'about', component:  EcmembersComponent },
  { path: 'durgotsav2025', component:  Durgotsav2025Component },
  { path: 'sponsors', component:  SponsorsComponent },
  { path: 'contact', component:  ContactComponent },
  { path: '**',component: HomeComponent}
];

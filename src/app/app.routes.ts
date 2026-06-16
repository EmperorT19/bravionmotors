import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { YardComponent } from './pages/yard/yard.component';
import { ServiceComponent } from './pages/service/service.component';
import { PartsComponent } from './pages/parts/parts.component';
import { ContactComponent } from './pages/contact/contact.component';
// import { ConfigureComponent } from './pages/configure/configure.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'inventory', component: YardComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'parts', component: PartsComponent },
  // { path: 'configure', component: ConfigureComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: 'home' }
];

import { NoInternetComponent } from './pages/no-internet/no-internet.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home-page.component').then(
        (m) => m.HomePageComponent
      ),
    title: 'Gerador de conselhos - Home',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Gerador de conselhos - Página não encontrada',
  },
  {
    path: 'no-internet',
    component: NoInternetComponent,
    title: 'Gerador de conselhos - Sem conexão à internet',
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout').then((m) => m.DefaultLayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/routes').then((m) => m.routes),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./pages/about/routes').then((m) => m.routes),
      },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];

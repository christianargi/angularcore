import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () =>
      import('./layout').then((m) => m.DefaultLayoutComponent),
    canActivate: [authGuard], // ✅ Proteksi semua route di dalam layout
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
    ],
  },
  // ✅ Fallback 404
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

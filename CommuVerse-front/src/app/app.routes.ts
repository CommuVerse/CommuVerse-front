import { Routes } from '@angular/router';

export const routes: Routes = [ 
    {
        path:'auth',
        loadChildren: () => import('./pages/auth/auth.routers').then(a=> a.authRoutes)
    }
];
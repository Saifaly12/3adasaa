import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: Home,
    title: 'عدسه | الرئيسيه',
  },

  {
    path: 'blog',
    loadComponent: () => import('./components/blog/blog').then((m) => m.Blog),
    title: 'عدسه | المدونه',

    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full',
      },

      {
        path: 'all',
        loadComponent: () =>
          import('./components/blog/all-articles-component/all-articles-component').then(
            (m) => m.AllArticlesComponent,
          ),
        title: 'عدسه | جميع المقالات',
      },

      {
        path: 'equipment',
        loadComponent: () =>
          import('./components/blog/equipment-component/equipment-component').then(
            (m) => m.EquipmentComponent,
          ),
        title: 'عدسه | معدات',
      },

      {
        path: 'techniques',
        loadComponent: () =>
          import('./components/blog/techniques-component/techniques-component').then(
            (m) => m.TechniquesComponent,
          ),
        title: 'عدسه | تقنيات',
      },

      {
        path: 'landscape',
        loadComponent: () =>
          import('./components/blog/landscape-component/landscape-component').then(
            (m) => m.LandscapeComponent,
          ),
        title: 'عدسه | مناظر طبيعية',
      },

      {
        path: 'portrait',
        loadComponent: () =>
          import('./components/blog/portrait-component/portrait-component').then(
            (m) => m.PortraitComponent,
          ),
        title: 'عدسه | بورتريه',
      },

      {
        path: 'lighting',
        loadComponent: () =>
          import('./components/blog/lighting-component/lighting-component').then(
            (m) => m.LightingComponent,
          ),
        title: 'عدسه | إضاءة',
      },
    ],
  },

  {
    path: 'about',
    loadComponent: () => import('./components/us/us').then((m) => m.Us),
    title: 'عدسه | من نحن',
  },

  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found').then((m) => m.NotFound),
    title: 'الصفحة غير متوفرة',
  },
];

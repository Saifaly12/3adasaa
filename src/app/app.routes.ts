import { Us } from './components/us/us';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Blog } from './components/blog/blog';
import { NotFound } from './components/not-found/not-found';
import { AllArticlesComponent } from './components/blog/all-articles-component/all-articles-component';
import { EquipmentComponent } from './components/blog/equipment-component/equipment-component';
import { TechniquesComponent } from './components/blog/techniques-component/techniques-component';
import { LandscapeComponent } from './components/blog/landscape-component/landscape-component';
import { PortraitComponent } from './components/blog/portrait-component/portrait-component';
import { LightingComponent } from './components/blog/lighting-component/lighting-component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'عدسه | الرئيسيه' },
  {
    path: 'blog',
    component: Blog,
    title: 'عدسه | المدونه',
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: AllArticlesComponent, title: 'عدسه | جميع المقالات' },
      { path: 'equipment', component: EquipmentComponent, title: 'عدسه | معدات' },
      { path: 'techniques', component: TechniquesComponent, title: 'عدسه | تقنيات' },
      { path: 'landscape', component: LandscapeComponent, title: 'عدسه | مناظر طبيعية' },
      { path: 'portrait', component: PortraitComponent, title: 'عدسه | بورتريه' },
      { path: 'lighting', component: LightingComponent, title: 'عدسه | إضاءة' },
    ],
  },
  { path: 'about', component: Us, title: 'عدسه | من نحن' },
  { path: '**', component: NotFound, title: 'الصفحة غير متوفرة' },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadComponent: () => import('./modules/home/home.component').then(r => r.HomeComponent),
  },
  {
    path: 'shop',
    loadComponent: () => import('./modules/shop/shop.component').then(r => r.ShopComponent),
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./modules/contact-us/contact-us.component').then(r => r.ContactUsComponent),
  },
  {
    path: 'about-us',
    loadComponent: () => import('./modules/about-us/about-us.component').then(r => r.AboutUsComponent),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./modules/checkout/checkout.component').then(r => r.CheckoutComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./modules/cart/cart.component').then(r => r.CartComponent),
  },
  {
    path: 'services',
    loadComponent: () => import('./modules/services/services.component').then(r => r.ServicesComponent),
  }
];

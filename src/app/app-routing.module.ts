import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';







const routes: Routes = [
  {
    path : '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path : 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path : 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)
  },
  {
    path : 'contact',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path : 'aboutus',
    loadComponent: () => import('./aboutus/aboutus.component').then(m => m.AboutusComponent)
  },
  {
    path : 'details/:title',
    loadComponent: () => import('./details/details.component').then(m => m.DetailsComponent)
  },
  {
    path : 'success',
    loadComponent: () => import('./success/success.component').then(m => m.SuccessComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { HomepageComponent } from '@modules/home/pages/homepage/homepage.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@modules/auth/auth.module').then((m) => m.AuthModule),
   
  },

  {
    path: '',
    component: HomepageComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
      canActivate:[AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

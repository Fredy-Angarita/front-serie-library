import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './data/services/auth/login/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'collection',
    loadChildren: () =>
      import('./pages/collection/collection.module').then(
        (m) => m.CollectionModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'library',
    loadChildren: () =>
      import('./pages/library/library.module').then((m) => m.LibraryModule),
    canActivate: [authGuard],
  },
  {
    path: 'series/:id',
    loadChildren: () =>
      import('./pages/series/series.module').then((m) => m.SeriesModule),
    canActivate: [authGuard],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/notfound/notfound.module').then((m) => m.NotfoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

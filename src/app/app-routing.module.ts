import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionPagesComponent } from './pages/collection/collection-pages/collection-pages.component';
import { SeriesPagesComponent } from './pages/series-pages/series-pages.component';
import { authGuard } from './data/services/auth/login/guards/auth.guard';
import { LibraryPagesComponent } from './pages/library/library-pages/library-pages.component';

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
    component: SeriesPagesComponent,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

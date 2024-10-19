import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionPagesComponent } from './pages/collection-pages/collection-pages.component';
import { SeriesPagesComponent } from './pages/series-pages/series-pages.component';
import { authGuard } from './data/services/auth/login/guards/auth.guard';
import { LibraryPagesComponent } from './pages/library-pages/library-pages.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'collection',
    component: CollectionPagesComponent,
    canActivate: [authGuard],
  },
  {
    path: 'library',
    component: LibraryPagesComponent,
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

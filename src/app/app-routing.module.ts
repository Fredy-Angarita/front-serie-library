import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { RegisterPagesComponent } from './pages/register-pages/register-pages.component';
import { CollectionPagesComponent } from './pages/collection-pages/collection-pages.component';
import { SeriesPagesComponent } from './pages/series-pages/series-pages.component';
import { NotFoundPagesComponent } from './pages/not-found-pages/not-found-pages.component';
import { authGuard } from './data/services/auth/login/guards/auth.guard';
import { LibraryPagesComponent } from './pages/library-pages/library-pages.component';

const routes: Routes = [
  { path: 'login', component: LoginPagesComponent },
  { path: 'register', component: RegisterPagesComponent },
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
  { path: '**', component: NotFoundPagesComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

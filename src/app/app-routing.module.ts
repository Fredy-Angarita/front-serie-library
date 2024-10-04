import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPagesComponent } from './components/pages/login-pages/login-pages.component';
import { RegisterPagesComponent } from './components/pages/register-pages/register-pages.component';
import { CollectionPagesComponent } from './components/pages/collection-pages/collection-pages.component';
import { SeriesPagesComponent } from './components/pages/series-pages/series-pages.component';
import { NotFoundPagesComponent } from './components/pages/not-found-pages/not-found-pages.component';
import { authGuard } from './data/services/auth/login/guards/auth.guard';
import { LibraryPagesComponent } from './components/pages/library-pages/library-pages.component';

const routes: Routes = [
  { path: 'login', component: LoginPagesComponent },
  { path: 'register', component: RegisterPagesComponent },
  {
    path: 'collection',
    component: CollectionPagesComponent,
    data: { page: 0 },
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

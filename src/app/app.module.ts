import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesTemplateComponent } from './components/templates/series-template/series-template.component';
import { UserFormsComponent } from './components/templates/user-forms/user-forms.component';
import { CollectionTemplateComponent } from './components/templates/collection-template/collection-template.component';
import { LoginPagesComponent } from './components/pages/login-pages/login-pages.component';
import { RegisterPagesComponent } from './components/pages/register-pages/register-pages.component';
import { CollectionPagesComponent } from './components/pages/collection-pages/collection-pages.component';
import { SeriesPagesComponent } from './components/pages/series-pages/series-pages.component';
import { NotFoundComponent } from './components/templates/not-found/not-found.component';
import { NotFoundPagesComponent } from './components/pages/not-found-pages/not-found-pages.component';
import { TokenInterceptor } from './data/services/auth/login/interceptors/token.interceptor';
import { LibraryPagesComponent } from './components/pages/library-pages/library-pages.component';
import { LibraryTemplateComponent } from './components/templates/library-template/library-template.component';
import { AtomsModule } from './shared/components/atoms/atoms.module';
import { MoleculesModule } from './shared/components/molecules/molecules.module';
import { OrganismsModule } from './shared/components/organisms/organisms.module';
@NgModule({
  declarations: [
    AppComponent,
    SeriesTemplateComponent,
    UserFormsComponent,
    CollectionTemplateComponent,
    LoginPagesComponent,
    RegisterPagesComponent,
    CollectionPagesComponent,
    SeriesPagesComponent,
    NotFoundComponent,
    NotFoundPagesComponent,
    LibraryPagesComponent,
    LibraryTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

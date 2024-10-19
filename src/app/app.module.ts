import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPagesComponent } from './components/pages/login-pages/login-pages.component';
import { RegisterPagesComponent } from './components/pages/register-pages/register-pages.component';
import { CollectionPagesComponent } from './components/pages/collection-pages/collection-pages.component';
import { SeriesPagesComponent } from './components/pages/series-pages/series-pages.component';
import { NotFoundPagesComponent } from './components/pages/not-found-pages/not-found-pages.component';
import { TokenInterceptor } from './data/services/auth/login/interceptors/token.interceptor';
import { LibraryPagesComponent } from './components/pages/library-pages/library-pages.component';
import { OrganismsModule } from './shared/components/organisms/organisms.module';
import { TemplatesModule } from './shared/components/templates/templates.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginPagesComponent,
    RegisterPagesComponent,
    CollectionPagesComponent,
    SeriesPagesComponent,
    NotFoundPagesComponent,
    LibraryPagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrganismsModule,
    TemplatesModule,
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowSeriesComponent } from './components/organisms/show-series/show-series.component';
import { NavBarComponent } from './components/organisms/nav-bar/nav-bar.component';
import { ListSummaryComponent } from './components/organisms/list-summary/list-summary.component';
import { LoginFormComponent } from './components/organisms/login-form/login-form.component';
import { RegisterFormComponent } from './components/organisms/register-form/register-form.component';
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
import { ProgressFormComponent } from './components/organisms/progress-form/progress-form.component';
import { LibraryPagesComponent } from './components/pages/library-pages/library-pages.component';
import { CollectionOrganismsComponent } from './components/organisms/collection-organisms/collection-organisms.component';
import { LibraryTemplateComponent } from './components/templates/library-template/library-template.component';
import { SeriesFormComponent } from './components/organisms/series-form/series-form.component';
import { AtomsModule } from './shared/components/atoms/atoms.module';
import { MoleculesModule } from './shared/components/molecules/molecules.module';
@NgModule({
  declarations: [
    AppComponent,
    ShowSeriesComponent,
    NavBarComponent,
    ListSummaryComponent,
    LoginFormComponent,
    RegisterFormComponent,
    SeriesTemplateComponent,
    UserFormsComponent,
    CollectionTemplateComponent,
    LoginPagesComponent,
    RegisterPagesComponent,
    CollectionPagesComponent,
    SeriesPagesComponent,
    NotFoundComponent,
    NotFoundPagesComponent,
    ProgressFormComponent,
    LibraryPagesComponent,
    CollectionOrganismsComponent,
    LibraryTemplateComponent,
    SeriesFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AtomsModule,
    MoleculesModule,
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserIconComponent } from './components/atoms/user-icon/user-icon.component';
import {PrimaryButtonComponent} from './components/atoms/primary-button/primary-button.component';
import { InputsComponent } from './components/atoms/inputs/inputs.component';
import { TitlesComponent } from './components/atoms/titles/titles.component';
import { CardSeriesComponent } from './components/molecules/card-series/card-series.component';
import { SessionActionsComponent } from './components/molecules/session-actions/session-actions.component';
import { ShowSeriesComponent } from './components/organisms/show-series/show-series.component';
import { ShowInfoComponent } from './components/molecules/show-info/show-info.component';
import { NavBarComponent } from './components/organisms/nav-bar/nav-bar.component';
import { ShowResumeComponent } from './components/molecules/show-resume/show-resume.component';
import { ListSummaryComponent } from './components/organisms/list-summary/list-summary.component';
import { FormFieldComponent } from './components/molecules/form-field/form-field.component';
import { LoginFormComponent } from './components/organisms/login-form/login-form.component';
import { RegisterFormComponent } from './components/organisms/register-form/register-form.component';
import { FormActionsComponent } from './components/molecules/form-actions/form-actions.component';
import { SeriesTemplateComponent } from './components/templates/series-template/series-template.component';
import { UserFormsComponent } from './components/templates/user-forms/user-forms.component';
import { CollectionTemplateComponent } from './components/templates/collection-template/collection-template.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryButtonComponent,
    UserIconComponent,
    InputsComponent,
    TitlesComponent,
    CardSeriesComponent,
    SessionActionsComponent,
    ShowSeriesComponent,
    ShowInfoComponent,
    NavBarComponent,
    ShowResumeComponent,
    ListSummaryComponent,
    FormFieldComponent,
    LoginFormComponent,
    RegisterFormComponent,
    FormActionsComponent,
    SeriesTemplateComponent,
    UserFormsComponent,
    CollectionTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

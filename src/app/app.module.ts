import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserIconComponent } from './components/atoms/user-icon/user-icon.component';
import {PrimaryButtonComponent} from './components/atoms/primary-button/primary-button.component';
import { InputsComponent } from './components/atoms/inputs/inputs.component';
import { LabelsComponent } from './components/atoms/labels/labels.component';
import { TitlesComponent } from './components/atoms/titles/titles.component';
import { CardSeriesComponent } from './components/molecules/card-series/card-series.component';
import { FormFieldComponent } from './components/molecules/form-field/form-field.component';
import { SessionActionsComponent } from './components/molecules/session-actions/session-actions.component';
import { ShowSeriesComponent } from './components/organisms/show-series/show-series.component';
import { ShowInfoComponent } from './components/molecules/show-info/show-info.component';
import { ParagraphComponent } from './components/atoms/paragraph/paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryButtonComponent,
    UserIconComponent,
    InputsComponent,
    LabelsComponent,
    TitlesComponent,
    CardSeriesComponent,
    FormFieldComponent,
    SessionActionsComponent,
    ShowSeriesComponent,
    ShowInfoComponent,
    ParagraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

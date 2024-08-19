import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserIconComponent } from './components/atoms/user-icon/user-icon.component';
import {PrimaryButtonComponent} from './components/atoms/primary-button/primary-button.component';
import { InputsComponent } from './components/atoms/inputs/inputs.component';
import { LabelsComponent } from './components/atoms/labels/labels.component';
import { TitlesComponent } from './components/atoms/titles/titles.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryButtonComponent,
    UserIconComponent,
    InputsComponent,
    LabelsComponent,
    TitlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

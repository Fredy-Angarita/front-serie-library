import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryButtonComponent } from './components/atoms/primary-button/primary-button.component';
import { UserIconComponent } from './components/atoms/user-icon/user-icon.component';
import { LabelComponent } from './components/atoms/label/label.component';
import { InputComponent } from './components/atoms/input/input.component';
import { InputsComponent } from './components/atoms/inputs/inputs.component';
import { LabelsComponent } from './components/atoms/labels/labels.component';
import { TitlesComponent } from './components/atoms/titles/titles.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryButtonComponent,
    UserIconComponent,
    LabelComponent,
    InputComponent,
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

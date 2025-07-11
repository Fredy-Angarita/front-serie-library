import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionOrganismsComponent } from './collection-organisms/collection-organisms.component';
import { ListSummaryComponent } from './list-summary/list-summary.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProgressFormComponent } from './progress-form/progress-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SeriesFormComponent } from './series-form/series-form.component';
import { ShowSeriesComponent } from './show-series/show-series.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AtomsModule } from '../atoms/atoms.module';
@NgModule({
  declarations: [
    CollectionOrganismsComponent,
    ListSummaryComponent,
    LoginFormComponent,
    NavBarComponent,
    ProgressFormComponent,
    RegisterFormComponent,
    SeriesFormComponent,
    ShowSeriesComponent,
  ],
  exports: [
    CollectionOrganismsComponent,
    ListSummaryComponent,
    LoginFormComponent,
    NavBarComponent,
    ProgressFormComponent,
    RegisterFormComponent,
    SeriesFormComponent,
    ShowSeriesComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, AtomsModule, MoleculesModule],
})
export class OrganismsModule {}

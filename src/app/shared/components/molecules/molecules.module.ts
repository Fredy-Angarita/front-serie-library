import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsMenuComponent } from './actions-menu/actions-menu.component';
import { CardSeriesComponent } from './card-series/card-series.component';
import { FormActionsComponent } from './form-actions/form-actions.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SessionActionsComponent } from './session-actions/session-actions.component';
import { ShowErrorsComponent } from './show-errors/show-errors.component';
import { ShowInfoComponent } from './show-info/show-info.component';
import { ShowResumeComponent } from './show-resume/show-resume.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { AtomsModule } from '../atoms/atoms.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    ActionsMenuComponent,
    CardSeriesComponent,
    FormActionsComponent,
    FormFieldComponent,
    InputSelectComponent,
    ModalComponent,
    PaginationComponent,
    SessionActionsComponent,
    ShowErrorsComponent,
    ShowInfoComponent,
    ShowResumeComponent,
    TextAreaComponent,
  ],
  imports: [
    CommonModule,
    AtomsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ActionsMenuComponent,
    CardSeriesComponent,
    FormActionsComponent,
    FormFieldComponent,
    InputSelectComponent,
    ModalComponent,
    PaginationComponent,
    SessionActionsComponent,
    ShowErrorsComponent,
    ShowInfoComponent,
    ShowResumeComponent,
    TextAreaComponent,
  ],
})
export class MoleculesModule {}

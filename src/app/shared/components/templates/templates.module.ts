import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionTemplateComponent } from './collection-template/collection-template.component';
import { LibraryTemplateComponent } from './library-template/library-template.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SeriesTemplateComponent } from './series-template/series-template.component';
import { UserFormsComponent } from './user-forms/user-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrganismsModule } from '../organisms/organisms.module';
@NgModule({
  declarations: [
    CollectionTemplateComponent,
    LibraryTemplateComponent,
    NotFoundComponent,
    SeriesTemplateComponent,
    UserFormsComponent,
  ],
  exports: [
    CollectionTemplateComponent,
    LibraryTemplateComponent,
    NotFoundComponent,
    SeriesTemplateComponent,
    UserFormsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, OrganismsModule],
})
export class TemplatesModule {}

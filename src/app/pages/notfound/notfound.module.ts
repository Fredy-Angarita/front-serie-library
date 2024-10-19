import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundRoutingModule } from './notfound-routing.module';
import { NotFoundPagesComponent } from './not-found-pages/not-found-pages.component';
import { TemplatesModule } from 'src/app/shared/components/templates/templates.module';

@NgModule({
  declarations: [NotFoundPagesComponent],
  imports: [CommonModule, NotfoundRoutingModule, TemplatesModule],
})
export class NotfoundModule {}

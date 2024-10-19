import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriesPagesComponent } from './series-pages/series-pages.component';
import { TemplatesModule } from 'src/app/shared/components/templates/templates.module';

@NgModule({
  declarations: [SeriesPagesComponent],
  imports: [CommonModule, SeriesRoutingModule, TemplatesModule],
})
export class SeriesModule {}

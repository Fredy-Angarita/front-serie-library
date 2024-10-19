import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionPagesComponent } from './collection-pages/collection-pages.component';
import { TemplatesModule } from 'src/app/shared/components/templates/templates.module';
import { CollectionRoutingModule } from './collection-routing.module';

@NgModule({
  declarations: [CollectionPagesComponent],
  imports: [CommonModule, CollectionRoutingModule, TemplatesModule],
})
export class CollectionModule {}

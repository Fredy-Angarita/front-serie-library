import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { TemplatesModule } from 'src/app/shared/components/templates/templates.module';
import { LibraryPagesComponent } from './library-pages/library-pages.component';

@NgModule({
  declarations: [LibraryPagesComponent],
  imports: [CommonModule, LibraryRoutingModule, TemplatesModule],
})
export class LibraryModule {}

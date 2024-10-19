import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryPagesComponent } from './library-pages/library-pages.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryPagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibraryRoutingModule {}

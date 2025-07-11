import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPagesComponent } from './not-found-pages/not-found-pages.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundPagesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotfoundRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPagesComponent } from './login-pages/login-pages.component';
import { RegisterPagesComponent } from './register-pages/register-pages.component';
import { TemplatesModule } from 'src/app/shared/components/templates/templates.module';
import { OrganismsModule } from 'src/app/shared/components/organisms/organisms.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginPagesComponent, RegisterPagesComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    TemplatesModule,
    OrganismsModule,
  ],
  exports: [LoginPagesComponent, RegisterPagesComponent],
})
export class AuthModule {}

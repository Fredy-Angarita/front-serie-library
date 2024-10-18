import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryButtonComponent } from './secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { TertiaryButtonComponent } from './tertiary-button/tertiary-button.component';
import { TitlesComponent } from './titles/titles.component';
import { UserIconComponent } from './user-icon/user-icon.component';

@NgModule({
  declarations: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    TertiaryButtonComponent,
    TitlesComponent,
    UserIconComponent,
  ],
  imports: [CommonModule],
  exports: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    TertiaryButtonComponent,
    TitlesComponent,
    UserIconComponent,
  ],
})
export class AtomsModule {}

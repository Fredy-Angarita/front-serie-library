import { Component } from '@angular/core';
import { BUTTON_COLORS, TITLES, TYPE_BUTTONS } from './data/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text_button = TYPE_BUTTONS.SAVE
  color = BUTTON_COLORS.PRIMARY
  title = TITLES.LOGIN
  label_text = 'Email'
}

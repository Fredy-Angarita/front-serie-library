import { Component } from '@angular/core';
import { BUTTON_COLORS, TITLES, TYPE_BUTTONS } from 'src/app/data/constants/constants';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  webTitle = TITLES.NAVBAR;
  color_button =  BUTTON_COLORS.PRIMARY;
  button_text = TYPE_BUTTONS.SEARCH;
}

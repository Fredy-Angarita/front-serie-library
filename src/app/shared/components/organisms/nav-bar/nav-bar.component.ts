import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  BUTTON_COLORS,
  TITLES,
  TYPE_BUTTONS,
} from 'src/app/data/constants/constants';
import { AuthLoginService } from 'src/app/data/auth/login/services/auth.login.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  webTitle = TITLES.NAVBAR;
  button_text = TYPE_BUTTONS.SEARCH;
  constructor(private authService: AuthLoginService, private router: Router) {}
  collectionRedirect() {
    this.router.navigate(['/collection'], {
      queryParams: { page: 0 },
    });
  }
  libraryRedirect() {
    this.router.navigate(['/library'], {
      queryParams: { page: 0 },
    });
  }
  logoutHandler() {
    console.log('logout');
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}

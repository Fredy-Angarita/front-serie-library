import { Component } from '@angular/core';

@Component({
  selector: 'app-session-actions',
  templateUrl: './session-actions.component.html',
  styleUrls: ['./session-actions.component.scss']
})
export class SessionActionsComponent {
    isActive: Boolean = false;


  toggle_menu (){
    this.isActive = !this.isActive;
  }
}

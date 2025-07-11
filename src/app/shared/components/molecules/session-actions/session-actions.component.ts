import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-session-actions',
  templateUrl: './session-actions.component.html',
  styleUrls: ['./session-actions.component.scss'],
})
export class SessionActionsComponent {
  isActive: Boolean = false;
  @Output() isLogout: EventEmitter<void> = new EventEmitter();
  constructor() {}
  toggle_menu() {
    this.isActive = !this.isActive;
  }
  logout() {
    this.isLogout.emit();
  }
}

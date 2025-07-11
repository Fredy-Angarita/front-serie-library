import { Component, EventEmitter, Output } from '@angular/core';
import { BUTTON_COLORS } from 'src/app/data/constants/constants';

@Component({
  selector: 'app-actions-menu',
  templateUrl: './actions-menu.component.html',
  styleUrls: ['./actions-menu.component.scss']
})
export class ActionsMenuComponent {
  add_color = BUTTON_COLORS.ADD_SAVE;
  back_color = BUTTON_COLORS.PRIMARY;
  delete_color = BUTTON_COLORS.DELETE;
  @Output() clickDelete = new EventEmitter<void>();
  @Output() clickAdd = new EventEmitter<void>();
  @Output() clickBack = new EventEmitter<void>();
  delete(){
    this.clickDelete.emit();
  }
  add(){
    this.clickAdd.emit();
  }
  back(){
    this.clickBack.emit();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BUTTON_COLORS } from 'src/app/data/constants/constants';
import { GetProgressResponseDto } from 'src/app/data/services/progress/dtos/response/get.progress.response..dto';

@Component({
  selector: 'app-show-resume',
  templateUrl: './show-resume.component.html',
  styleUrls: ['./show-resume.component.scss']
})
export class ShowResumeComponent {
  @Input() progress!: GetProgressResponseDto;
  @Output() edit = new EventEmitter<GetProgressResponseDto>();
  open_state = false;

  openResume(){
    this.open_state = !this.open_state;
  }
  openModal(){
    this.edit.emit(this.progress);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BUTTON_COLORS } from 'src/app/data/constants/constants';
import { PatchProgressRequestDto } from 'src/app/data/services/progress/dtos/request/patch.progress.request.dto';
import { GetProgressResponseDto } from 'src/app/data/services/progress/dtos/response/get.progress.response.dto';

@Component({
  selector: 'app-show-resume',
  templateUrl: './show-resume.component.html',
  styleUrls: ['./show-resume.component.scss']
})
export class ShowResumeComponent {
  @Input() progress!: GetProgressResponseDto;
  private editProgress!: PatchProgressRequestDto;
  @Output() edit = new EventEmitter<PatchProgressRequestDto>();
  open_state = false;

  openResume(){
    this.open_state = !this.open_state;
  }
  openModal(){
    this.editProgress = {
      id: this.progress.id,
      chapter: this.progress.chapter,
      resume: this.progress.resume,
    };
    this.edit.emit(this.editProgress);
  }
}

import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TITLES } from 'src/app/data/constants/constants';
import { PostProgressRequestDto } from 'src/app/data/services/progress/dtos/request/post.progress.request.dto';
import { GetProgressResponseDto } from 'src/app/data/services/progress/dtos/response/get.progress.response.dto';
import { ProgressService } from 'src/app/data/services/progress/services/progress.service';

@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.scss'],
})
export class ListSummaryComponent {
  @Input() summaries: GetProgressResponseDto[] = [];
  @Output() progress = new EventEmitter<PostProgressRequestDto>();
  clickedEdit: boolean = false;
  clickedAdd: boolean = false;
  editProgress: GetProgressResponseDto | undefined;
  title = TITLES.SUMMARY;
  constructor() {}
  showForm() {
    this.clickedAdd = !this.clickedAdd;
  }
  openModal() {
    this.clickedEdit = !this.clickedEdit;
  }
  editSummary(event: GetProgressResponseDto) {
    this.editProgress = event;
    console.log(this.editProgress.chapter);
    this.openModal();
  }
  supplier($event: PostProgressRequestDto) {
    this.progress.emit($event);
    this.showForm();
  }
}
import {
  Component,
  Input,
} from '@angular/core';
import { TITLES } from 'src/app/data/constants/constants';
import { GetProgressResponseDto } from 'src/app/data/services/progress/dtos/response/get.progress.response.dto';

@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.scss'],
})
export class ListSummaryComponent {
  @Input() summaries: GetProgressResponseDto[] = [];
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
}
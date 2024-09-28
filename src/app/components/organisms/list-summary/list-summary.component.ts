import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BUTTON_COLORS, TITLES } from 'src/app/data/constants/constants';
import { GetProgressResponseDto } from 'src/app/data/services/progress/dtos/response/get.progress.response..dto';
import { ProgressProviderService } from 'src/app/data/services/progress/services/progress.provider.service';
import { ProgressService } from 'src/app/data/services/progress/services/progress.service';

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
  constructor(
    private progressProvider: ProgressProviderService,
  ) {}
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

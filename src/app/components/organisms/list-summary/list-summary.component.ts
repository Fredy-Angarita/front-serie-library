import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TITLES } from 'src/app/data/constants/constants';
import { PatchProgressRequestDto } from 'src/app/data/services/progress/dtos/request/patch.progress.request.dto';
import { PostProgressRequestDto } from 'src/app/data/services/progress/dtos/request/post.progress.request.dto';
import { GetProgressResponseDto } from 'src/app/data/services/progress/dtos/response/get.progress.response.dto';
@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.scss'],
})
export class ListSummaryComponent {
  @Input() summaries: GetProgressResponseDto[] = [];
  @Output() progress = new EventEmitter<PostProgressRequestDto>();
  @Output() edit = new EventEmitter<PatchProgressRequestDto>();
  @Output() scroll = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<void>();
  clickedEdit: boolean = false;
  clickedAdd: boolean = false;

  editProgress!: PatchProgressRequestDto;
  title = TITLES.SUMMARY;
  constructor() {}
  showForm() {
    this.clickedAdd = !this.clickedAdd;
  }
  openModal() {
    this.clickedEdit = !this.clickedEdit;
  }
  editSummary(event: PatchProgressRequestDto) {
    this.editProgress = event;
    this.openModal();
  }
  onScroll(event: any) {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    const clientHeight = event.target.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - 30) {
      this.scroll.emit(true);
    }
  }
  deleteProgress() {
    this.delete.emit();
  }

  supplierEdit($event: PatchProgressRequestDto) {
    this.edit.emit($event);
    this.openModal();
  }
  supplier($event: PostProgressRequestDto) {
    this.progress.emit($event);
    this.showForm();
  }
}

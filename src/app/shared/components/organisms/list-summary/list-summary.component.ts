import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { TITLES } from 'src/app/data/constants/constants';
import { PatchProgressRequestDto } from 'src/app/data/progress/dtos/request/patch.progress.request.dto';
import { PostProgressRequestDto } from 'src/app/data/progress/dtos/request/post.progress.request.dto';
import { GetProgressResponseDto } from 'src/app/data/progress/dtos/response/get.progress.response.dto';
@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.scss'],
})
export class ListSummaryComponent {
  @ViewChild('scroll') scrollRef!: ElementRef;
  @Input() summaries: GetProgressResponseDto[] = [];
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
    const offsetHeight = event.target.offsetHeight;
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    if (offsetHeight + scrollTop >= scrollHeight - 50) {
      this.scroll.emit(true);
    }
  }

  goBack() {
    this.scrollRef.nativeElement.scrollTop = 0;
  }

  deleteProgress() {
    if (this.summaries.length <= 0) {
      alert('you not have summaries to delete on this series');
      return;
    }
    this.delete.emit();
  }
}

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input() pages!: number;
  @Output() changePageEvent = new EventEmitter<number>();
  pagination: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.pagination = this.generateArray();
  }
  changePage(page: number) {
    this.changePageEvent.emit(page - 1);
  }

  generateArray(): number[] {
    const data: number[] = [];
    for (let i = 1; i <= this.pages; i++) {
      data.push(i);
    }
    return data;
  }
}

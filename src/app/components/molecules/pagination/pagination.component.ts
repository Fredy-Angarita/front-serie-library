import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnChanges, OnInit {
  @Input() pages!: number;
  @Output() changePageEvent = new EventEmitter<number>();
  private currentPage = 0;
  pagination: number[] = [];
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.queryParamMap.subscribe((params) => {
      this.currentPage = +params.get('page')!;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.pagination = this.generateArray();
  }
  changePage(page: number) {
    this.changePageEvent.emit(page - 1);
  }

  isActive(page: number): boolean {
    return page === this.currentPage + 1;
  }

  generateArray(): number[] {
    const data: number[] = [];
    for (let i = 1; i <= this.pages; i++) {
      data.push(i);
    }
    return data;
  }
}

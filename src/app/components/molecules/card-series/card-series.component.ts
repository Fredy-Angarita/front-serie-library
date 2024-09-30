import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-series',
  templateUrl: './card-series.component.html',
  styleUrls: ['./card-series.component.scss'],
})
export class CardSeriesComponent {
  @Input() id!: string;
  @Input() img!: string;
  @Input() series_title!: string;
  private page = 0;
  private limit = 15;

  constructor(private router: Router) {}
  showSeries() {
    this.router.navigate([`series/${this.id}`], {
      queryParams: { page: this.page, limit: this.limit },
    });
  }
}

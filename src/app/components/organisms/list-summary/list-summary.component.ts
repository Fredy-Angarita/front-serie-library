import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BUTTON_COLORS, TITLES, TYPE_BUTTONS } from 'src/app/data/constants/constants';
import { Summary } from 'src/app/data/interfaces/summary.interface';
import { GetProgressResponse } from 'src/app/data/services/progress/dtos/response/get.progress.interface';
import { ProgressService } from 'src/app/data/services/progress/services/progress.service';

@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.scss'],
})
export class ListSummaryComponent implements OnInit {
  summaries: GetProgressResponse[] = [];
  title = TITLES.SUMMARY;
  add_color = BUTTON_COLORS.ADD_SAVE;
  back_color = BUTTON_COLORS.PRIMARY;
  delete_color = BUTTON_COLORS.DELETE;
  constructor(private progressService: ProgressService, private activeRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    const seriesID = this.activeRoute.snapshot.paramMap.get('id');
    if (seriesID == null) return;
    this.progressService.getProgress(seriesID).subscribe({
      next: (progress) => {
        this.summaries = progress;
      },
    });
  }
}

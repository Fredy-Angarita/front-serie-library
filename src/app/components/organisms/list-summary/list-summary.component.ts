import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BUTTON_COLORS, TITLES } from 'src/app/data/constants/constants';
import { GetProgressResponse } from 'src/app/data/services/progress/dtos/response/get.progress.interface';
import { ProgressService } from 'src/app/data/services/progress/services/progress.service';

@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.scss'],
})
export class ListSummaryComponent implements OnInit {
  clickedEdit: boolean = false;
  clickedAdd: boolean = false;
  summaries: GetProgressResponse[] = [];
  editProgress: GetProgressResponse | undefined;
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

  showForm(){
    this.clickedAdd = !this.clickedAdd;
  }
  openModal(){
    this.clickedEdit = !this.clickedEdit;
  }
  editSummary(event: GetProgressResponse){
    this.editProgress = event;
    console.log(this.editProgress.chapter);
    this.openModal();
  }
}

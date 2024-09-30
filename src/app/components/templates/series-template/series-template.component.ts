import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PatchProgressRequestDto } from 'src/app/data/services/progress/dtos/request/patch.progress.request.dto';
import { PostProgressRequestDto } from 'src/app/data/services/progress/dtos/request/post.progress.request.dto';
import { GetProgressResponseDto } from 'src/app/data/services/progress/dtos/response/get.progress.response.dto';
import { ProgressProviderService } from 'src/app/data/services/progress/services/progress.provider.service';
import { GetSeriesResponse } from 'src/app/data/services/series/dtos/response/get.series.response.dto';
import { SeriesProviderService } from 'src/app/data/services/series/services/series.provider.service';

@Component({
  selector: 'app-series-template',
  templateUrl: './series-template.component.html',
  styleUrls: ['./series-template.component.scss'],
})
export class SeriesTemplateComponent implements OnInit {
  progressList: GetProgressResponseDto[] = [];
  private add: PostProgressRequestDto = {
    chapter: 0,
    resume: '',
    series: '',
  };
  private update: PatchProgressRequestDto = {
    id: '',
  };
  series: GetSeriesResponse = {
    id: '',
    title: '',
    synopsis: '',
    thumbnail: '',
    totalChapters: 0,
    publicationDate: '',
  };
  constructor(
    private progressProvider: ProgressProviderService,
    private seriesProvider: SeriesProviderService
  ) {}
  ngOnInit(): void {
    this.progressProvider.getListProgressData().subscribe((progress) => {
      this.progressList = progress;
    });
    this.seriesProvider.getData().subscribe((series) => {
      this.series = series;
    });
  }

  obtainEdit($data: PatchProgressRequestDto) {
    this.update = $data;
    this.progressProvider.setEditProgress(this.update);
  }

  obtainData($data: PostProgressRequestDto) {
    this.add = $data;
    this.progressProvider.setAddProgress(this.add);
  }
}

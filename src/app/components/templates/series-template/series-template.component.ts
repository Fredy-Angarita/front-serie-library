import { Component, OnInit } from '@angular/core';
import { GetProgressResponseDto } from 'src/app/data/services/progress/dtos/response/get.progress.response.dto';
import { ProgressProviderService } from 'src/app/data/services/progress/services/progress.provider.service';

@Component({
  selector: 'app-series-template',
  templateUrl: './series-template.component.html',
  styleUrls: ['./series-template.component.scss']
})
export class SeriesTemplateComponent implements OnInit{
  progressList : GetProgressResponseDto[] = [];
  constructor(private progressProvider: ProgressProviderService) { }
  ngOnInit(): void {
    this.progressProvider.getProgressData().subscribe((progress) => {
      this.progressList = progress;
    });
  }
}

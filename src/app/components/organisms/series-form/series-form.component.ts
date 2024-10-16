import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PostSeriesRequestDto } from 'src/app/data/services/series/dtos/request/post.series.dto';
import { SeriesService } from 'src/app/data/services/series/services/series.service';
import { GetTypeSeriesResponseDto } from 'src/app/data/services/typeSeries/dtos/response/get.type-series.response.dto';
import { TypeSeriesService } from 'src/app/data/services/typeSeries/services/type-series.service';
@Component({
  selector: 'app-series-form',
  templateUrl: './series-form.component.html',
  styleUrls: ['./series-form.component.scss'],
})
export class SeriesFormComponent implements OnInit {
  seriesForm: FormGroup;
  options: GetTypeSeriesResponseDto[] = [];
  serverError: string | null = null;
  private urlPattern: string =
    '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  private selectedOption: number = 0;
  constructor(
    private fb: FormBuilder,
    private seriesService: SeriesService,
    private typeService: TypeSeriesService
  ) {
    this.seriesForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      synopsis: ['', [Validators.required, Validators.minLength(10)]],
      publicationDate: [''],
      thumbnail: [
        '',
        [Validators.required, Validators.pattern(this.urlPattern)],
      ],
      chapters: ['', [Validators.required]],
      select: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.typeService.getAllTypes().subscribe({
      next: (types) => {
        this.options = types;
      },
      error: (error) => {
        this.serverError = error.error.message;
      },
    });
  }
  get selectControl() {
    return this.seriesForm.get('select') as FormControl;
  }
  get chaptersControl() {
    return this.seriesForm.get('chapters') as FormControl;
  }
  get titleControl() {
    return this.seriesForm.get('title') as FormControl;
  }
  get synopsisControl() {
    return this.seriesForm.get('synopsis') as FormControl;
  }
  get publicationDateControl() {
    return this.seriesForm.get('publicationDate') as FormControl;
  }
  get thumbnailControl() {
    return this.seriesForm.get('thumbnail') as FormControl;
  }
  onSelect($event: number) {
    this.selectedOption = $event;
  }
  onSubmit() {
    const series: PostSeriesRequestDto = {
      title: this.titleControl.value,
      synopsis: this.synopsisControl.value,
      publicationDate: this.publicationDateControl.value,
      totalChapters: +this.chaptersControl.value,
      thumbnail: this.thumbnailControl.value,
      typeSeries: this.selectedOption,
    };
    this.seriesService.createSeries(series).subscribe();
    location.reload();
  }
  hasError(): boolean {
    return this.serverError !== null;
  }
  messageError(): string {
    if (this.serverError !== null) {
      return this.serverError;
    }
    return '';
  }
}

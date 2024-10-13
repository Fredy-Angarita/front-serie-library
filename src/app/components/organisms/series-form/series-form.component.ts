import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-series-form',
  templateUrl: './series-form.component.html',
  styleUrls: ['./series-form.component.scss'],
})
export class SeriesFormComponent {
  seriesForm: FormGroup;
  options = ['hola', 'adios', 'chau', 'hello', 'bye', 'goodbye'];
  constructor(private fb: FormBuilder) {
    this.seriesForm = this.fb.group({
      title: ['', [Validators.required]],
      synopsis: ['', [Validators.required]],
      publicationDate: [''],
      thumbnail: ['', [Validators.required]],
      chapters: ['', [Validators.required]],
    });
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
}

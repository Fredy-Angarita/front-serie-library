import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostProgressRequestDto } from 'src/app/data/services/progress/dtos/request/post.progress.request.dto';
import { GetProgressResponseDto } from 'src/app/data/services/progress/dtos/response/get.progress.response.dto';

@Component({
  selector: 'app-progress-form',
  templateUrl: './progress-form.component.html',
  styleUrls: ['./progress-form.component.scss']
})
export class ProgressFormComponent implements OnInit {
  @Input() objectEdit: GetProgressResponseDto | undefined;
  @Output() submitProgress = new EventEmitter<PostProgressRequestDto>();
  progressForm: FormGroup;
  seriesId: string = '';
  constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute) {
      this.progressForm = this.fb.group({
        chapter: ['', [Validators.required]],
        summary: ['', [Validators.required]],
      })
  }
  ngOnInit(): void {
    if(this.objectEdit){
      this.progressForm = this.fb.group({
        chapter: [{value: this.objectEdit.chapter, disabled: true}, [Validators.required]],
        summary: [this.objectEdit.resume, [Validators.required]],
      })
    }
    this.seriesId = this.activeRoute.snapshot.paramMap.get('id') as string;
  }

  hasError(){
    return this.progressForm.invalid;
  }

  get chapterControl() {
    return this.progressForm.get('chapter') as FormControl;
  }
  get summaryControl() {
    return this.progressForm.get('summary') as FormControl;
  }
  onSubmit() {
    const progress: PostProgressRequestDto = {
      chapter: parseInt(this.chapterControl.value, 10),
      resume: this.summaryControl.value,
      series: this.seriesId
    }
    this.submitProgress.emit(progress);
  }
}

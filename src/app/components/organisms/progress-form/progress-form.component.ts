import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GetProgressResponseDto } from 'src/app/data/services/progress/dtos/response/get.progress.response.dto';

@Component({
  selector: 'app-progress-form',
  templateUrl: './progress-form.component.html',
  styleUrls: ['./progress-form.component.scss']
})
export class ProgressFormComponent implements OnInit {
  @Input() objectEdit: GetProgressResponseDto | undefined;
  progressForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
  onSubmit() {}
}

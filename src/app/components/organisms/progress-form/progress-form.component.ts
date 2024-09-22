import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-progress-form',
  templateUrl: './progress-form.component.html',
  styleUrls: ['./progress-form.component.scss']
})
export class ProgressFormComponent {
  progressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.progressForm = this.fb.group({
      chapter: ['', [Validators.required]],
      summary: ['', [Validators.required]],
    })
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

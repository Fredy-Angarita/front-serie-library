import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatchProgressRequestDto } from 'src/app/data/progress/dtos/request/patch.progress.request.dto';
import { PostProgressRequestDto } from 'src/app/data/progress/dtos/request/post.progress.request.dto';
import { GetProgressResponseDto } from 'src/app/data/progress/dtos/response/get.progress.response.dto';
import { ProgressService } from 'src/app/data/progress/services/progress.service';
import { EditValidators } from 'src/app/shared/validators/edit.validators';

@Component({
  selector: 'app-progress-form',
  templateUrl: './progress-form.component.html',
  styleUrls: ['./progress-form.component.scss'],
})
export class ProgressFormComponent implements OnInit {
  @Input() addOrEdit!: string;
  @Input() objectEdit!: PatchProgressRequestDto;
  @Output() submitProgress = new EventEmitter<void>();
  progressForm: FormGroup;
  private seriesId: string = '';
  serverError: string | null = null;
  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private progress: ProgressService
  ) {
    this.progressForm = this.fb.group({
      chapter: ['', [Validators.required]],
      summary: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  ngOnInit(): void {
    if (this.objectEdit) {
      this.progressForm = this.fb.group({
        chapter: [
          { value: this.objectEdit.chapter, disabled: true },
          [Validators.required],
        ],
        summary: [
          this.objectEdit.resume,
          [
            Validators.required,
            Validators.minLength(10),
            EditValidators.wasEdited(this.objectEdit.resume),
          ],
        ],
      });
    }
    this.seriesId = this.activeRoute.snapshot.paramMap.get('id') as string;
  }

  get chapterControl() {
    return this.progressForm.get('chapter') as FormControl;
  }
  get summaryControl() {
    return this.progressForm.get('summary') as FormControl;
  }

  onSubmit() {
    if (this.addOrEdit === 'add') {
      const progress: PostProgressRequestDto = {
        chapter: parseInt(this.chapterControl.value, 10),
        resume: this.summaryControl.value,
        series: this.seriesId,
      };
      this.progress.postProgress(progress).subscribe({
        next: () => {
          location.reload();
        },
        error: (error) => {
          this.serverError = error.error.message;
        },
      });
    } else if (this.addOrEdit === 'edit') {
      this.objectEdit.resume = this.summaryControl.value;
      this.progress.patchProgress(this.objectEdit).subscribe({
        next: () => {
          location.reload();
        },
      });
    }
  }
  hasError() {
    return this.serverError !== null;
  }
  showError(): string {
    if (this.serverError) {
      return this.serverError;
    }
    return '';
  }
}

import { Component, Input } from '@angular/core';
import { BUTTON_COLORS } from 'src/app/data/constants/constants';

@Component({
  selector: 'app-show-resume',
  templateUrl: './show-resume.component.html',
  styleUrls: ['./show-resume.component.scss']
})
export class ShowResumeComponent {
  color = BUTTON_COLORS.SECONDARY;
  open_state = false;

  @Input() chapter!: string;
  @Input() date!: string;
  @Input() resume!: string;

  openResume(){
    this.open_state = !this.open_state;
  }
}

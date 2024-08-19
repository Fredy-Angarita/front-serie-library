import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent {
  @Input() for !: string;
  @Input() text !: string;
}

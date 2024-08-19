import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent {
  @Input() type !: string;
  @Input() name !: string;
  @Input() placeholder !: string;
  @Input() id !: string;
}

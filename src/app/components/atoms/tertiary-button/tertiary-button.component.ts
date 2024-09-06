import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tertiary-button',
  templateUrl: './tertiary-button.component.html',
  styleUrls: ['./tertiary-button.component.scss']
})
export class TertiaryButtonComponent {
  @Input() button_color !: string;
}

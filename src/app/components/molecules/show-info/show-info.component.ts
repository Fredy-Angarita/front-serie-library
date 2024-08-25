import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss']
})
export class ShowInfoComponent {
   @Input() subtitle !: string;
   @Input() data !: any;
}

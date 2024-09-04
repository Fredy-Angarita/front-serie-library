import { Component, Input } from '@angular/core';
import { ShowSeries } from 'src/app/data/interfaces/show-series.interface';

@Component({
  selector: 'app-show-series',
  templateUrl: './show-series.component.html',
  styleUrls: ['./show-series.component.scss']
})
export class ShowSeriesComponent {
  series: ShowSeries;
  details: boolean = false;  
  @Input() total: number = 0;
  @Input() progress: number = 0;
  constructor() { 
    this.series = {
      title: 'Umineko no Naku Koro ni Chiru - Episode 8: Twilight of the Golden Witch:',
      series_img: 'https://th.bing.com/th/id/OIP.PuC7GBD2hHxHnowUvrnxQgAAAA?rs=1&pid=ImgDetMain',
      chapters: 145,
      progress: 2,
      date: 'N/A',
      synopsis: 'Apparitions, oddities, and gods continue to manifest around Koyomi Araragi and his close-knit group of friends: Tsubasa Hanekawa, the groups modest genius; Shinobu Oshino, the resident doughnut-loving vampire; athletic deviant Suruga Kanbaru; bite-happy spirit Mayoi Hachikuji; Koyomis cute admirer Nadeko Sengoku; and Hitagi Senjougahara, Koyomis eclectic girlfriend. A new semester has begun and with graduation looming over Koyomi, he must quickly decide the paths he will walk, as well as the relationships he will form and friends that he will save. But as strange events begin to unfold, Koyomi is nowhere to be found, and a vicious tiger apparition has appeared in his absence. Hanekawa has become its target, and she quickly finds she must fend for herself.'
    }
  }
  showDetails() {
    this.details = !this.details;
  }
}

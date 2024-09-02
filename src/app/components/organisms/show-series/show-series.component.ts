import { Component } from '@angular/core';
import { ShowSeries } from 'src/app/data/interfaces/show-series.interface';

@Component({
  selector: 'app-show-series',
  templateUrl: './show-series.component.html',
  styleUrls: ['./show-series.component.scss']
})
export class ShowSeriesComponent {
  series: ShowSeries;
  details: boolean = false;
  icon_chapters: string = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M10 14h4v-2h-4zm0-3h8V9h-8zm0-3h8V6h-8zM6 18V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zM8 4v12z"/></svg>';
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

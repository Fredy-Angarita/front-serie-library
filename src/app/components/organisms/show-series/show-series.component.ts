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
      title: 'Rebuild',
      series_img: 'https://th.bing.com/th/id/OIP.PuC7GBD2hHxHnowUvrnxQgAAAA?rs=1&pid=ImgDetMain',
      chapters: 145,
      progress: 2,
      date: 'N/A',
      synopsis: 'sum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit am ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit am ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
  }
  showDetails() {
    this.details = !this.details;
  }
}

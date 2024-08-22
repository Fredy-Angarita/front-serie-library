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
  constructor() { 
    this.series = {
      series_img: 'https://th.bing.com/th/id/OIP.PuC7GBD2hHxHnowUvrnxQgAAAA?rs=1&pid=ImgDetMain',
      chapters: 145,
      progress: 2,
      date: 'N/A',
      synopsis: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti atque omnis, est repudiandae quisquam harum assumenda eaque nam distinctio fugit eos nisi, voluptatum, ullam aut fugiat. Error, eos ea!'
    }
  }
  showDetails() {
    this.details = !this.details;
  }
}

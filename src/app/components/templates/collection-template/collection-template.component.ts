import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-collection-template',
  templateUrl: './collection-template.component.html',
  styleUrls: ['./collection-template.component.scss']
})
export class CollectionTemplateComponent {
 
  data = [
    {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'No sabia'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Cmo se llamaba'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  },
  {
    img : 'https://media.s-bol.com/v7BokgoZj8Yr/nwQnk4/550x781.jpg',
    series_title : 'Rebuild World'
  }
]
series = this.data;
searchSeries(event : KeyboardEvent){
  const input = event.target as HTMLInputElement;
  this.series = this.data.filter(series => series.series_title.toLowerCase().includes(input.value.toLowerCase()));
  if(input.value === ''){
    this.series = this.data;
  }
}
}

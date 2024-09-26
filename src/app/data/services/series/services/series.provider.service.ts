import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetProgressResponse } from '../../progress/dtos/response/get.progress.interface';
import { GetSeriesResponse } from '../dtos/response/get.series.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesDataService {
  private parentDataSubject = new BehaviorSubject<any>(null);
  constructor() { }

  //TODO: Change the type of data
  setParentData(data: any) {
    this.parentDataSubject.next(data);
  }
  getParentData(): Observable<any> {
    return this.parentDataSubject.asObservable(); ;
  }
}

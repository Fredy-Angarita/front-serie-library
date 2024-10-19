import { Injectable } from '@angular/core';
import { GetSeriesResponse } from '../dtos/response/get.series.response.dto';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeriesProviderService {
  private shareDataSubject = new Subject<GetSeriesResponse>();
  constructor() {}

  setData(data: GetSeriesResponse) {
    this.shareDataSubject.next(data);
  }
  getData(): Observable<GetSeriesResponse> {
    return this.shareDataSubject.asObservable();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/shared/environments/env.develop';
import { GetCollectionResponse } from '../dtos/response/get.collection.interface';
import { GetSeriesResponse } from '../dtos/response/get.series.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private url = environment.apiBase + '/series';
  constructor(private http: HttpClient) { }

  getAllSeries() : Observable<GetSeriesResponse[]> {
    return this.http.get<GetSeriesResponse[]>(this.url);
  }

  getCollection() : Observable<GetCollectionResponse[]> {
    return this.http.get<GetCollectionResponse[]>(`${this.url}/collection`);
  }

  getOneSeries(id: string) : Observable<GetSeriesResponse> {
    return this.http.get<GetSeriesResponse>(`${this.url}/${id}`);
  }

}

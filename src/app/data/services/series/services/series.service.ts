import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/shared/environments/env.develop';
import { GetSeriesResponse } from '../dtos/response/get.series.response.dto';
import { GetListCollectionResponse } from '../dtos/response/get.list.series.response.dto';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private url = environment.apiBase + '/series';
  constructor(private http: HttpClient) { }

  getAllSeries() : Observable<GetListCollectionResponse[]> {
    return this.http.get<GetListCollectionResponse[]>(this.url);
  }

  getCollection() : Observable<GetListCollectionResponse[]> {
    return this.http.get<GetListCollectionResponse[]>(`${this.url}/collection`);
  }

  getOneSeries(id: string) : Observable<GetSeriesResponse> {
    return this.http.get<GetSeriesResponse>(`${this.url}/${id}`);
  }

}

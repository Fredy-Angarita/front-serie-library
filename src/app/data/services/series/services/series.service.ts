import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/shared/environments/env.develop';
import { GetSeriesResponse } from '../dtos/response/get.series.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private url = environment.apiBase + '/series/user';
  constructor(private http: HttpClient) { }

  getSeries() : Observable<GetSeriesResponse[]> {
    return this.http.get<GetSeriesResponse[]>(this.url);
  }
}

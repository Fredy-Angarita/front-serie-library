import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetTypeSeriesResponseDto } from '../dtos/response/get.type-series.response.dto';
import { environment } from 'src/app/shared/environments/env.develop';

@Injectable({
  providedIn: 'root',
})
export class TypeSeriesService {
  constructor(private http: HttpClient) {}
  private baseUrl = environment.apiBase + '/typeSeries';
  getAllTypes(): Observable<GetTypeSeriesResponseDto[]> {
    return this.http.get<GetTypeSeriesResponseDto[]>(this.baseUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/shared/environments/env.develop';
import { GetSeriesResponse } from '../dtos/response/get.series.response.dto';
import { GetListCollectionResponse } from '../dtos/response/get.list.series.response.dto';
import { PaginationResponse } from 'src/app/shared/types/pagination.response.type';
import { PostSeriesRequestDto } from '../dtos/request/post.series.dto';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private url = environment.apiBase + '/series';
  constructor(private http: HttpClient) {}

  getAllSeries(
    page: number,
    limit: number
  ): Observable<PaginationResponse<GetListCollectionResponse>> {
    return this.http.get<PaginationResponse<GetListCollectionResponse>>(
      this.url,
      {
        params: {
          page: page,
          limit: limit,
        },
      }
    );
  }

  createSeries(series: PostSeriesRequestDto) {
    return this.http.post(this.url, series);
  }

  getCollection(
    page: number,
    limit: number
  ): Observable<PaginationResponse<GetListCollectionResponse>> {
    return this.http.get<PaginationResponse<GetListCollectionResponse>>(
      `${this.url}/collection`,
      {
        params: {
          page: page,
          limit: limit,
        },
      }
    );
  }

  getOneSeries(id: string): Observable<GetSeriesResponse> {
    return this.http.get<GetSeriesResponse>(`${this.url}/${id}`);
  }
}

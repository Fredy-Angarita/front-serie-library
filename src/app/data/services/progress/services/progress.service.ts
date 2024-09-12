import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/shared/environments/env.develop';
import { GetProgressResponse } from '../dtos/response/get.progress.interface';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  url = environment.apiBase + '/progress';
  constructor(private http: HttpClient) { }

  getProgress(id: string): Observable<GetProgressResponse>{
    return this.http.get<GetProgressResponse> (this.url + '/' + id);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostRegisterRequest } from '../dtos/request/post.register.request';
import { Observable } from 'rxjs';
import { PostRegisterResponse } from '../dtos/response/post.register.response';
import { environment } from 'src/environments/env.develop';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private registerURL = `${environment.apiBase}/auth/register`;
  constructor(private http: HttpClient) {}

  register(
    register_data: PostRegisterRequest
  ): Observable<PostRegisterResponse> {
    return this.http.post<PostRegisterResponse>(
      this.registerURL,
      register_data,
    );
  }
}

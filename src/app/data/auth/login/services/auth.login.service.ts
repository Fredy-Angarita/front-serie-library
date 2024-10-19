import { Injectable } from '@angular/core';
import { environment } from 'src/app/shared/environments/env.develop';
import { PostLoginRequest } from '../dtos/request/post.login.request';
import { Observable } from 'rxjs';
import { PostLoginResponse } from '../dtos/response/post.login.response.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private apiURL = `${environment.apiBase}/auth/login`;
  private tokenKey = 'token';
  constructor(private http: HttpClient) { }

  login (loginData: PostLoginRequest): Observable<PostLoginResponse> {
    return this.http.post<PostLoginResponse>(this.apiURL, loginData);
  }

  isAuthenticated(): boolean {
    return this.getAccessToken().length > 0;
  }

  getAccessToken(): string {
    return localStorage.getItem(this.tokenKey) || '';
  }
  saveAccessToken(token: string){
    localStorage.setItem(this.tokenKey, token);
  }

  logout(){
    localStorage.removeItem(this.tokenKey);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GetProgressResponseDto } from '../dtos/response/get.progress.response.dto';
import { PostProgressRequestDto } from '../dtos/request/post.progress.request.dto';

@Injectable({
  providedIn: 'root'
})
export class ProgressProviderService {
  private progressDataSubject = new Subject<GetProgressResponseDto[]>();
  private progressData = new Subject<PostProgressRequestDto>();
  constructor() { }
  setAddOrUpdateProgress(data: PostProgressRequestDto) {
    this.progressData.next(data);
  }
  getAddOrUpdateProgress(): Observable<PostProgressRequestDto> {
    return this.progressData.asObservable();
  }


  setProgressData(data: GetProgressResponseDto[]) {
    this.progressDataSubject.next(data);
  }
  getProgressData(): Observable<GetProgressResponseDto[]> {
    return this.progressDataSubject.asObservable();
  }

}

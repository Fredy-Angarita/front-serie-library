import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GetProgressResponseDto } from '../dtos/response/get.progress.response.dto';
import { PostProgressRequestDto } from '../dtos/request/post.progress.request.dto';
import { PatchProgressRequestDto } from '../dtos/request/patch.progress.request.dto';

@Injectable({
  providedIn: 'root'
})
export class ProgressProviderService {
  private listProgressData = new Subject<GetProgressResponseDto[]>();
  private newProgress = new Subject<PostProgressRequestDto>();
  private editProgress = new Subject<PatchProgressRequestDto>();
  constructor() { }

  getEditProgress(): Observable<PatchProgressRequestDto> {
    return this.editProgress.asObservable();
  }
  setEditProgress(data: PatchProgressRequestDto) {
    this.editProgress.next(data);
  }
  getAddProgress(): Observable<PostProgressRequestDto> {
    return this.newProgress.asObservable();
  }
  setAddProgress(data: PostProgressRequestDto) {
    this.newProgress.next(data);
  }
  getListProgressData(): Observable<GetProgressResponseDto[]> {
    return this.listProgressData.asObservable();
  }
  setListProgressData(data: GetProgressResponseDto[]) {
    this.listProgressData.next(data);
  }

}

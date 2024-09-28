import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GetProgressResponseDto } from '../dtos/response/get.progress.response.dto';

@Injectable({
  providedIn: 'root'
})
export class ProgressProviderService {
  private progressDataSubject = new Subject<GetProgressResponseDto[]>();
  constructor() { }
  
  setProgressData(data: GetProgressResponseDto[]) {
    this.progressDataSubject.next(data);
  }
  getProgressData(): Observable<GetProgressResponseDto[]> {
    return this.progressDataSubject.asObservable();
  }

}

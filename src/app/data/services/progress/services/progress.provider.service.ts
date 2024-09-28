import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetProgressResponseDto } from '../dtos/response/get.progress.response..dto';

@Injectable({
  providedIn: 'root'
})
export class ProgressProviderService {
  private progressDataSubject = new BehaviorSubject<GetProgressResponseDto[]>([]);

  setProgressData(data: GetProgressResponseDto[]) {
    this.progressDataSubject.next(data);
  }
  getProgressData(): Observable<GetProgressResponseDto[]> {
    return this.progressDataSubject as Observable<GetProgressResponseDto[]>;
  }

  constructor() { }
}

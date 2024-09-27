import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressProviderService {
  private progressDataSubject = new BehaviorSubject<any>(null);

  setProgressData(data: any) {
    this.progressDataSubject.next(data);
  }
  getProgressData(): Observable<any> {
    return this.progressDataSubject.asObservable();
  }

  constructor() { }
}

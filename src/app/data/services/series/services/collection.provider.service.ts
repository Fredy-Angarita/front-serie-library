import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetCollectionResponse } from '../dtos/response/get.collection.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesDataService {
  private parentDataSubject = new BehaviorSubject<any>(null);
  constructor() { }

  //TODO: Change the type of data
  setParentData(data: GetCollectionResponse[]) {
    this.parentDataSubject.next(data);
  }
  getParentData(): Observable<any> {
    return this.parentDataSubject.asObservable(); ;
  }
}

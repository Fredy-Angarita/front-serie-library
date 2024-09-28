import { Injectable, Signal, signal } from '@angular/core';
import { GetListCollectionResponse } from '../dtos/response/get.list.series.response.dto';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionProviderService {
  private shareDataSubject = new BehaviorSubject<GetListCollectionResponse[]>([]);
  constructor() { }

  setData(data: GetListCollectionResponse[]) {
    this.shareDataSubject.next(data);
  }
  getData(): Observable<GetListCollectionResponse[]> {
    return this.shareDataSubject as Observable<GetListCollectionResponse[]>;
  }
}

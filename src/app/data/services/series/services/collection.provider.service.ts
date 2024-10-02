import { Injectable, Signal, signal } from '@angular/core';
import { GetListCollectionResponse } from '../dtos/response/get.list.series.response.dto';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollectionProviderService {
  private shareDataSubject = new Subject<GetListCollectionResponse[]>();
  constructor() {}

  setData(data: GetListCollectionResponse[]) {
    this.shareDataSubject.next(data);
  }
  getData(): Observable<GetListCollectionResponse[]> {
    return this.shareDataSubject as Observable<GetListCollectionResponse[]>;
  }
}

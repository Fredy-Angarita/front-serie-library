import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GetListCollectionResponse } from '../dtos/response/get.list.series.response.dto';

@Injectable({
  providedIn: 'root',
})
export class LibraryProviderService {
  private shareDataSubject = new Subject<GetListCollectionResponse[]>();

  constructor() {}

  setLibrary(data: GetListCollectionResponse[]) {
    this.shareDataSubject.next(data);
  }
  getLibrary(): Observable<GetListCollectionResponse[]> {
    return this.shareDataSubject as Observable<GetListCollectionResponse[]>;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GetListCollectionResponse } from '../dtos/response/get.list.series.response.dto';
import { PaginationResponse } from 'src/app/shared/types/pagination.response.type';

@Injectable({
  providedIn: 'root',
})
export class LibraryProviderService {
  private shareDataSubject = new Subject<
    PaginationResponse<GetListCollectionResponse>
  >();

  constructor() {}

  setLibrary(data: PaginationResponse<GetListCollectionResponse>) {
    this.shareDataSubject.next(data);
  }
  getLibrary(): Observable<PaginationResponse<GetListCollectionResponse>> {
    return this.shareDataSubject as Observable<
      PaginationResponse<GetListCollectionResponse>
    >;
  }
}

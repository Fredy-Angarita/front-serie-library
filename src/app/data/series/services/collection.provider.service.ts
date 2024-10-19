import { Injectable, Signal, signal } from '@angular/core';
import { GetListCollectionResponse } from '../dtos/response/get.list.series.response.dto';
import { Observable, Subject } from 'rxjs';
import { PaginationResponse } from 'src/app/shared/types/pagination.response.type';

@Injectable({
  providedIn: 'root',
})
export class CollectionProviderService {
  private shareDataSubject = new Subject<
    PaginationResponse<GetListCollectionResponse>
  >();
  constructor() {}

  setData(data: PaginationResponse<GetListCollectionResponse>) {
    this.shareDataSubject.next(data);
  }
  getData(): Observable<PaginationResponse<GetListCollectionResponse>> {
    return this.shareDataSubject as Observable<
      PaginationResponse<GetListCollectionResponse>
    >;
  }
}

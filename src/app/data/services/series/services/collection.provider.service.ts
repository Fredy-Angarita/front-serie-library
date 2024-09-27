import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GetListCollectionResponse } from '../dtos/response/get.list.series.response.dto';

@Injectable({
  providedIn: 'root'
})
export class CollectionProviderService {
  private shareDataSignal = signal<any>(null);
  private parentDataSubject = new BehaviorSubject<any>(null);
  constructor() { }

  //TODO: Change the type of data
  setParentData(data: GetListCollectionResponse[]) {
    this.shareDataSignal.set(data);
  }
  getParentData(){
    return this.shareDataSignal;
  }
}

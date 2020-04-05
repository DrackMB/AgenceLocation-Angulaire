import { Injectable } from '@angular/core';
import {LocationDetail} from "../model/location-detail.model";

@Injectable({
  providedIn: 'root'
})
export class LocationDetailService {
  private _locationDetail: LocationDetail ;
  private _locationDetailResult : Array<LocationDetail> ;
  constructor() { }
  public save(){
    this._locationDetailResult.push(this.cloneLocationDetail(this.locationDetail));
  }
  private cloneLocationDetail(locationDetail: LocationDetail) : LocationDetail{
    const myClone = new LocationDetail();
    myClone.voiture = locationDetail.voiture ;
    myClone.dateLocation = locationDetail.dateLocation;
    myClone.dateRetour = locationDetail.dateRetour ;
    myClone.prix = locationDetail.prix ;
    myClone.location = locationDetail.location ;
    return myClone ;
  }
  get locationDetail(): LocationDetail {
    if(this._locationDetail == null){
      this._locationDetail = new LocationDetail();
    }
    return this._locationDetail;
  }

  set locationDetail(value: LocationDetail) {
    this._locationDetail = value;
  }

  get locationDetailResult(): Array<LocationDetail> {
    return this._locationDetailResult;
    if(this._locationDetailResult == null){
      this._locationDetailResult = new Array<LocationDetail>();
    }
  }

  set locationDetailResult(value: Array<LocationDetail>) {
    this._locationDetailResult = value;
  }
}

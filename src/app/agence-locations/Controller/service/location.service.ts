import { Injectable } from '@angular/core';
import {Location} from "../model/location.model";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
private _location : Location ;
private _locationResult : Array<Location> ;

  constructor() { }
  public save(){
    this._locationResult.push(this.cloneLocation(this.location));
  }
  private cloneLocation(location: Location) : Location{
    const myClone = new Location();
    myClone.client = location.client ;
    myClone.dateLocation = location.dateLocation ;
    myClone.prixTotal = location.prixTotal ;
    myClone.locationDetail = location.locationDetail ;
    return myClone ;
  }

  get location(): Location {
    if(this._location == null){
      this._location = new Location();
    }
    return this._location;
  }

  set location(value: Location) {
    this._location = value;
  }

  get locationResult(): Array<Location> {
    if(this._locationResult == null){
    this._locationResult = new Array<Location>();
  }
    return this._locationResult;
  }

  set locationResult(value: Array<Location>) {
    this._locationResult = value;
  }
}

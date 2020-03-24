import {Injectable} from '@angular/core';
import {Transmition} from '../model/transmition.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransmitionService {
  private _transmitions: Array<Transmition>;

  constructor(private http: HttpClient) { }
  findAll(){
    this.http.get<Array<Transmition>>('http://localhost:9090/AgenceLocation/transmition/').subscribe(
      data => {
        this._transmitions = data;
      }, error => {
        console.log('kayen erooore fl trans');
      }
    );
  }


  get transmitions(): Array<Transmition> {
    if(this._transmitions == null){
      this._transmitions = new Array<Transmition>();
    }
    return this._transmitions;
  }

  set transmitions(value: Array<Transmition>) {
    this._transmitions = value;
  }
}

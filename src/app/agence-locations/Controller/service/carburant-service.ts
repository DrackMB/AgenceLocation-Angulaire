import {Injectable} from '@angular/core';
import {Carburant} from '../model/carburant.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarburantService {
  private _carburants: Array<Carburant>;
  private carburant: Carburant;

  constructor(private http: HttpClient) { }

  findAll() {
    this.http.get<Array<Carburant>>('http://localhost:9090/AgenceLocation/carburant/').subscribe(
      data => {
              this._carburants = data;
      }, error => {
        console.log('kayen erooore fchi blassa');
      }
    );
  }

  get carburants(): Array<Carburant> {
    if (this._carburants == null) {
      this._carburants = new Array<Carburant>();
    }
    return this._carburants;
  }

  set carburants(value: Array<Carburant>) {
    this._carburants = value;
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Voiture} from '../model/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  private _voiture: Voiture;
  private _voitureResult: Array<Voiture>;

  constructor( private http: HttpClient) { }

  public findAll() {
    this.http.get<Array <Voiture>> ('http://localhost:9090/agencelocation/voiture/').subscribe(
      data => {
           console.log('ha  data jat' + data);
           this._voitureResult = data;
       }, error => {
             console.log('kayen chi mochkil');

      }
    );
  }

  get voiture(): Voiture {
    if(this._voiture == null){
      this._voiture = new Voiture();
    }
    return this._voiture;
  }

  set voiture(value: Voiture) {
    this._voiture = value;
  }

  get voitureResult(): Array<Voiture> {
    if(this._voitureResult == null){
      this._voitureResult = new Array<Voiture>();
    }
    return this._voitureResult;
  }

  set voitureResult(value: Array<Voiture>) {
    this._voitureResult = value;
  }
}


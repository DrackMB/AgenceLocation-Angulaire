import {Injectable} from '@angular/core';
import {Transmition} from '../model/transmition.model';
import {HttpClient} from '@angular/common/http';
import {Categorie} from '../model/categorie.model';
import {Voiture} from '../model/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class TransmitionService {
  private _transmitions: Array<Transmition>;
  private _transmition: Transmition;


  constructor(private http: HttpClient) { }
  findAll() {
    this.http.get<Array<Transmition>>('http://localhost:9090/AgenceLocation/transmition/').subscribe(
      data => {
        this._transmitions = data;
      }, error => {
        console.log('kayen erooore fl trans');
      }
    );
  }
  save(transmition: Transmition) {
    this.http.post<number>('http://localhost:9090/AgenceLocation/transmition/', transmition).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log('errooore f Tansmition');
      }
    );

  }
  findByTransmitionLibelle(transmition: Transmition) {
    this.http.get<Array<Voiture>>('http://localhost:9090/agencelocation/voiture/Trans/libelle/' + transmition.libelle ).subscribe(
      data => {
        this.transmition.voiture = data;
        console.log('passe bien');
      },
      error => {
        console.log('erreur');
      }
    );
  }

  findByLibelle() {
    this.http.get<Transmition>('http://localhost:9090/AgenceLocation/transmition/libelle/' + this._transmition.libelle ).subscribe(
      data => {
           return  this.colneTransmition(this.transmition).libelle = data.libelle;
      }, error => {
           console.log('Eroore f  Transmition');
      }
    );
  }



  get transmition(): Transmition {
    if (this._transmition == null) {
      this._transmition = new Transmition();
    }
    return this._transmition;
  }

  set transmition(value: Transmition) {
    this._transmition = value;
  }

  get transmitions(): Array<Transmition> {
    if (this._transmitions == null) {
      this._transmitions = new Array<Transmition>();
    }
    return this._transmitions;
  }

  set transmitions(value: Array<Transmition>) {
    this._transmitions = value;
  }

  colneTransmition(transmition: Transmition): Transmition {
    const myCopie = new Transmition();
    myCopie.libelle = transmition.libelle;
    return myCopie;
  }


}

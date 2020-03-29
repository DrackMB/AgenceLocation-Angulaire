import {Injectable} from '@angular/core';
import {Carburant} from '../model/carburant.model';
import {HttpClient} from '@angular/common/http';
import {Transmition} from '../model/transmition.model';

@Injectable({
  providedIn: 'root'
})
export class CarburantService {
  private _carburants: Array<Carburant>;
  private _carburant: Carburant;
  private _carburantfoanded: Carburant;
  private _msgError: string;
  private url = 'http://localhost:9090/AgenceLocation/carburant/';

  constructor(private http: HttpClient) { }

  public  findAll() {
    this.http.get<Array<Carburant>>(this.url).subscribe(
      data => {
              this._carburants = data;
      }, error => {
        console.log('kayen erooore fchi blassa');
      }
    );
  }
  public save(carburant: Carburant) {
    this.http.post<number>(this.url, carburant).subscribe(
      data => {
         console.log(data);
         if (data > 0) {
           this.carburants.push(carburant);
           this.carburant = null;
         }
      }, error => {
           console.log('erroore fl Carburant');
      }
    );
  }

  public findByLibelle(carburant: Carburant) {
    this.http.get<Carburant>('http://localhost:9090/AgenceLocation/carburant/libelle/' + carburant.libelle).subscribe(
      data => {
        if (data != null) {
          this.carburantfoanded = data;
          console.log(' hada data ' + data.libelle );
          this._carburant = null ;
        }
      }, error => {
           console.log('erore  fl Carburant');
      }
    );

  }
  public deleteByLibelle(carburant: Carburant) {
    this.http.delete<number>(this.url + 'libelle/' + carburant.libelle).subscribe(
      data => {
         if (data > 0 ) {
           this.deleteFromViwe(carburant);
           console.log(data);
         }
      }, error => {
          console.log('eorre in delete');
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

  get carburant(): Carburant {
    if (this._carburant == null) {
      this._carburant = new Carburant();
    }
    return this._carburant;
  }

  set carburant(value: Carburant) {
   this._carburant = value;
  }

  get carburantfoanded(): Carburant {
    if (this._carburantfoanded == null) {
      this._carburantfoanded = new Carburant();
    }
    return this._carburantfoanded;
  }

  set carburantfoanded(value: Carburant) {
    this._carburantfoanded = value;
  }


  public cloneCarburant(carburant: Carburant): Carburant {
    const myCopie = new Carburant();
    myCopie.libelle = carburant.libelle;
    return myCopie;
  }
    private deleteFromViwe(carburant: Carburant) {
    const index = this.carburants.findIndex(c => c.libelle === carburant.libelle );
    if (index !== -1) {
      this.carburants.splice(index, 1);
    }
  }
}

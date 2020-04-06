import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pays} from '../model/pays.model';


@Injectable({
  providedIn: 'root'
})
export class PaysService {
private _pays: Pays;
private _paysListe: Array<Pays>;
private _paysByNom: Pays;
private _url =  'http://localhost:9090/agenceLocation/pays/';

constructor(private http: HttpClient)  { }


  get pays(): Pays {
    if (this._pays == null) {
      this._pays = new Pays();
    }
    return this._pays;
  }

  set pays(value: Pays) {
    this._pays = value;
  }

  get paysListe(): Array<Pays> {
    if (this._paysListe == null) {
      this._paysListe = new Array<Pays>();
    }
    return this._paysListe;
  }

  set paysListe(value: Array<Pays>) {
    this._paysListe = value;
  }

  get paysByNom(): Pays {
    if (this._paysByNom == null) {
      this._paysByNom = new Pays();
    }
    return this._paysByNom;
  }

  set paysByNom(value: Pays) {
    this._paysByNom = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  public save(pays: Pays) {
    this.http.post<number>('http://localhost:9090/agenceLocation/pays/', pays).subscribe(
      data => {
          this.paysListe.push(this.clonePays(this.pays));
          console.log(data);
          this.pays = null;
      }, error => {
        console.log('erreur');
      }
    );
  }
  private clonePays(pays: Pays) {
    const myClon = new Pays();
    myClon.nom = pays.nom;
    myClon.code = pays.code;
    return myClon;
  }

  public  findAll() {
    this.http.get<Array<Pays>>('http://localhost:9090/agenceLocation/pays/' ).subscribe(
      data => {
        this.paysListe = data ;
        console.log(data);
      }, error => {
        console.log('erreur');
      }
    );
  }
  public  deleteByNom(pays: Pays) {
    this.http.delete<number>('http://localhost:9090/agenceLocation/pays/nom/' + pays.nom).subscribe(
      data => {
        console.log(data);
        this.deleteByNomFromView(pays);
      }, error => {
        console.log('erreur');
      }
    );
  }
  public findByNom(pays: Pays) {
    this.http.get<Pays>(this._url + 'nom/' + pays.nom).subscribe(
      data => {
        if (data != null) {
          this.paysByNom = data;
          console.log('data ' + data.nom);
          this.pays = null ;
        }
      }, error => {
        console.log('error');
      }
    );
  }
  public  deleteByNomFromView(pays: Pays) {
    const index = this.paysListe.findIndex(a => a.nom === pays.nom);
    if (index !== -1) {
      this.paysListe.splice(index, 1 );
    }
  }
  public validateSave(): boolean {
    return this.pays.code != null && this.pays.nom != null;

  }




}

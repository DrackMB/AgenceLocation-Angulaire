import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ville} from '../model/ville.model';
import {Pays} from '../model/pays.model';



@Injectable({
  providedIn: 'root'
})
export class VilleService {

  private _ville: Ville;
  private _villes: Array<Ville>;
  private _villeByNom: Ville;
  private _pays: Pays;
  private _paysListe: Array<Pays>;
  private _url = 'http://localhost:9090/agenceLocation/ville/';


  get paysListe(): Array<Pays> {
    if ( this._paysListe == null){
      this._paysListe = new Array<Pays>();
    }
    return this._paysListe;
  }

  set paysListe(value: Array<Pays>) {
    this._paysListe = value;
  }

  get ville(): Ville {
    if (this._ville == null) {
      this._ville = new Ville();
    }
    return this._ville;
  }

  set ville(value: Ville) {
    this._ville = value;
  }

  get villes(): Array<Ville> {
    if (this._villes == null) {
      this._villes = new Array<Ville>();
    }
    return this._villes;
  }

  set villes(value: Array<Ville>) {
    this._villes = value;
  }


  get villeByNom(): Ville {
    if (this._villeByNom == null) {
      this._villeByNom = new Ville();
    }
    return this._villeByNom;
  }

  set villeByNom(value: Ville) {
    this._villeByNom = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }


  get pays(): Pays {
    return this._pays;
  }

  set pays(value: Pays) {
    this._pays = value;
  }

  constructor(private http: HttpClient)  { }
  public save(ville: Ville) {
    this.http.post<number>(this._url , ville).subscribe(
      data => {
          this.villes.push(this.cloneVille(this.ville));
          this.pays.ville.push(this.cloneVille(this.ville));
          console.log(data);
          this.ville = null;
      }, error => {
        console.log('erreur');
      }
    );
  }
  private cloneVille(ville: Ville) {
    const myClon = new Ville();
    myClon.nom = ville.nom;
    myClon.code = ville.code;
    myClon.pays = ville.pays;
    return myClon;
  }

  public  findAll() {
    this.http.get<Array<Ville>>( 'http://localhost:9090/agenceLocation/ville/' ).subscribe(
      data => {
        this.villes = data ;
        console.log(data);
      }, error => {
        console.log('erreur');
      }
    );
  }
  public  deleteByNom(ville: Ville) {
    this.http.delete<number>('http://localhost:9090/agenceLocation/ville/nom/' + ville.nom).subscribe(
      data => {
        console.log(data);
        this.deleteByNomFromView(ville);
      }, error => {
        console.log('erreur');
      }
    );
  }
  public findByNom(ville: Ville ) {
    this.http.get<Ville>(this._url + 'nom/' + ville.nom).subscribe(
      data => {
        if (data != null) {
          this.villeByNom = data;
          console.log('data ' + data.nom );
          this.ville = null ;
        }
      }, error => {
        console.log('error');
      }
    );
  }
  public  deleteByNomFromView(ville: Ville) {
    const index = this.villes.findIndex(a => a.nom === ville.nom);
    if (index !== -1) {
      this.villes.splice(index, 1 );
    }
  }
  public validateSave(): boolean {
    return this.ville.code != null && this.ville.nom != null;

  }

}

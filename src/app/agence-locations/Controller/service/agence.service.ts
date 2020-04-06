import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Agence} from '../model/agence.model';
import {Ville} from '../model/ville.model';






@Injectable({
  providedIn: 'root'
})
export class AgenceService {


  private _agence: Agence;

  private _agences: Array<Agence>;

  private _agencesByNom: Array<Agence>;

  private _agencesByVille: Array<Agence>;

  private _agenceByCode: Agence;

  private _ville: Ville;

  private url = 'http://localhost:9090/agenceLocation/agence/'

  constructor(private http: HttpClient) {
  }


  get agenceByCode(): Agence {
    if (this._agenceByCode == null){
      this._agenceByCode = new Agence();
    }
    return this._agenceByCode;
  }

  set agenceByCode(value: Agence) {
    this._agenceByCode = value;
  }

  get  agence(): Agence {
    if (this._agence == null) {
      this._agence = new Agence();
    }
    return this._agence;
  }

  set agence(value: Agence) {
    this._agence = value;
  }

  get agences(): Array<Agence> {
    if (this._agences == null) {
      this._agences = new Array<Agence>();
    }
    return this._agences;
  }

  set agences(value: Array<Agence>) {
    this._agences = value;
  }

  get agencesByNom(): Array<Agence> {
    if (this._agencesByNom == null) {
      this._agencesByNom = new Array<Agence>();
    }
    return this._agencesByNom;
  }

  set agencesByNom(value: Array<Agence>) {
    this._agencesByNom = value;
  }

  get agencesByVille(): Array<Agence> {
    if (this._agencesByVille == null) {
      this._agencesByVille = new Array<Agence>();
    }
    return this._agencesByVille;
  }

  set agencesByVille(value: Array<Agence>) {
    this._agencesByVille = value;
  }


  get ville(): Ville {
    if (this._ville == null) {
      this._ville =  new Ville();
    }
    return this._ville;
  }

  set ville(value: Ville) {
    this._ville = value;
  }

  public save(agence: Agence) {
    this.http.post<number>('http://localhost:9090/agenceLocation/agence/', agence).subscribe(
      data => {
        if ( data > 0) {
        this.agences.push(this.cloneAgence(this.agence));
        this.ville.agence.push(this.cloneAgence(this.agence));
        console.log(data);
        this.agence = null;
        }
      }, error => {
        console.log('erreur');
      }
    );
  }
  public validateSave(): boolean {
    return this.agence.code != null ;

  }

  public  findAll() {
    this.http.get<Array<Agence>>( 'http://localhost:9090/agenceLocation/agence/').subscribe(
      data => {
        this.agences = data;
        console.log(data);
      }, error => {
        console.log('erreur');
      }
    );
  }
  public findByVille(agence: Agence ) {
    this.http.get<Array<Agence>>('http://localhost:9090/agenceLocation/agence/ville/nom/' + agence.ville).subscribe(
      data => {
        if (data != null) {
          this.agencesByVille = data ;
          console.log('data ' + data );
          this.agence = null ;
        }
      }, error => {
        console.log('error');
      }
    );
  }

  public findByNom(agence: Agence ) {
    this.http.get<Array<Agence>>('http://localhost:9090/agenceLocation/agence/nom/' + agence.nom).subscribe(
      data => {
        if (data != null) {
          this.agencesByNom = data ;
          console.log('data ' + data );
          this.agence = null ;
        }
      }, error => {
        console.log('error');
      }
    );
  }


public  deleteByNomFromView(agence: Agence) {
    const index = this.agencesByNom.findIndex(a => a.nom === agence.nom);
    if (index !== -1) {
      this.agencesByNom.splice(index, 1 );
    }
  }
  public  deleteByCodeFromView(agence: Agence) {
    const index = this.agences.findIndex(a => a.code === agence.code);
    if (index !== -1) {
      this.agences.splice(index, 1 );
    }
  }

  public  deleteByNom(agence: Agence) {
    this.http.delete<number>('http://localhost:9090/agenceLocation/agence/nom/' + agence.nom).subscribe(
      data => {
        console.log(data);
        this.deleteByNomFromView(agence);
      }, error => {
        console.log('erreur');
      }
    );
  }

  public  deleteByCode(agence: Agence) {
    this.http.delete<number>('http://localhost:9090/agenceLocation/agence/code/' + agence.code).subscribe(
      data => {
        console.log(data);
        this.deleteByCodeFromView(agence);
        this.agence = null;
      }, error => {
        console.log('erreur');
      }
    );
  }
  public findByCode(agence: Agence ) {
    this.http.get<Agence>('http://localhost:9090/agenceLocation/agence/code/' + agence.code).subscribe(
      data => {
        if (data != null) {
          this.agenceByCode = data;
          console.log('data ' + data.code );
          agence = null ;
        }
      }, error => {
        console.log('error');
      }
    );
  }

  private cloneAgence(agence: Agence) {
    const myClon = new Agence();
    myClon.nom = agence.nom;
    myClon.numTele = agence.numTele;
    myClon.code = agence.code;
    myClon.adress = agence.adress;
    myClon.ville = agence.ville;
    return myClon;
  }


  }

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Agence} from '../model/agence.model';
import {Voiture} from '../model/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  private _agence: Agence;

  private _agences: Array<Agence>;

  public findall() {
    this.http.get<Array<Agence>>('http://localhost:9090/AgenceLocation/agence/').subscribe(
      data => {
        this._agences = data;
        console.log('les données');
      },
      error => {
        console.log('erreur quelque part');
      }
    );
  }

  get agence(): Agence {
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

  public findByCode(agence: Agence) {
    this.http.get<Array<Voiture>>('http://localhost:9090/agencelocation/voiture/code/' + agence.code).subscribe(
      data => {
        this.agence.voiture = data;
        console.log('passe bien');
      },
      error => {
        console.log('erreur');
      }
    );
  }

  public findByNom(agence: Agence) {
    this.http.get<Array<Voiture>>('http://localhost:9090/AgenceLocation/agence/nom/' + agence.nom).subscribe(
      data => {
        this.agence.voiture = data;
        console.log('passe bien');
      },
      error => {
        console.log('erreur');
      }
    );
  }

  constructor(private http: HttpClient) { }
}

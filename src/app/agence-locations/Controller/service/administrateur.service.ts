import { Injectable } from '@angular/core';
import {Administrateur} from "../model/administrateur.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {
private _administrateur: Administrateur ;
private url = 'http://localhost:9090/AgenceLocation/' ;

  constructor(private http: HttpClient) { }

public save(){
    this.http.post(this.url, this.administrateur).subscribe(
      data => {
        this.administrateur = null ;
        alert('success');
        console.log('success');
      }, error => {
        console.log('error in save');
      }
    );
}

  private cloneAdministrateur(administrateur: Administrateur) {
      const myClone = new Administrateur();
      myClone.nom = administrateur.nom ;
      myClone.prenom = administrateur.prenom ;
      myClone.login = administrateur.login ;
      myClone.password = administrateur.password ;
      return myClone ;
    }


  get administrateur(): Administrateur {
    if(this._administrateur == null){
      this._administrateur = new Administrateur();
  }
    return this._administrateur;
  }
  set administrateur(value: Administrateur) {
    this._administrateur = value;
  }

}

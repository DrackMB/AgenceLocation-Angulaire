import { Injectable } from '@angular/core';
import {Marque} from '../model/marque.model';
import {HttpClient} from '@angular/common/http';
import {Categorie} from '../model/categorie.model';


@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  private _marque: Marque;
  private _marques: Array<Marque>;

  constructor(private http: HttpClient) { }

  public save() {
    this.http.post<number>('http://localhost:9090/agencelocation/marque/', this.marque).subscribe(
      data => {
        if (data > 0) {
          this.marques.push(this.cloneMarque(this.marque));
          this._marque = null;
        }
      }, error => {
        console.log('error');
      }
    );
  }
  public findall(){
    this.http.get<Array<Marque>>('http://localhost:9090/agencelocation/marque/').subscribe(
      data =>{
        this._marques = data;
        console.log('ha data');
      },
      error => {
        console.log('erreur');
      }
    );
  }
  findByMarqueLibelle(marque: Marque){
    this.http.get<Array<Categorie>>('http://localhost:9090/agencelocation/categorie/cat/libelle/'+ marque.libelle ).subscribe(
      data =>{
       this.marque.categorie = data;
        console.log('passe bien');
      },
      error => {
        console.log('erreur');
      }
    );

  }
  public findByLibelle(libelle: string){
    this.http.get<string>('http://localhost:9090/agencelocation/libelle/{libelle}').subscribe(
      data => {
        this._marque.libelle = data;
      },
      error => {
        console.log('il y a une erreur quelque part');
      }
    );
  }

  private cloneMarque(marque: Marque) {
    const myClone = new Marque();
    myClone.libelle = marque.libelle;
    return myClone;
  }

  get marque(): Marque {
    if (this._marque == null) {
      this._marque = new Marque();
    }
    return this._marque;
  }

  set marque(value: Marque) {
    this._marque = value;
  }


  get marques(): Array<Marque> {
    if (this._marques == null) {
      this._marques = new Array<Marque>();}

    return this._marques;
  }

  set marques(value: Array<Marque>) {
    this._marques = value;
  }


}

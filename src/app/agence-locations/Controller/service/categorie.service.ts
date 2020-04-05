import { Injectable } from '@angular/core';
import {Marque} from '../model/marque.model';
import {Categorie} from '../model/categorie.model';
import {HttpClient} from '@angular/common/http';
import {Voiture} from '../model/voiture.model';
import {Agence} from '../model/agence.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private _categorie: Categorie;

  private _categories: Array<Categorie>;
  private _marque: Marque;

  get marque(): Marque {
    if (this._marque == null) {
      this._marque = new Marque();
    }
    return this._marque;
  }

  set marque(value: Marque) {
    this._marque = value;
  }


  constructor(private http: HttpClient) { }
  public save1() {
  this.http.post<number>('http://localhost:9090/agencelocation/categorie/', this.categorie).subscribe(
    data => {
  if (data > 0) {
    this.marque.categorie.push(this.cloneCategorie(this.categorie));
}
}, error => {
  console.log('il existe un erreur');
}
);
}


  public findall() {
    this.http.get<Array<Categorie>>('http://localhost:9090/agencelocation/categorie/find').subscribe(
      data => {
        this.categories = data;
        console.log('data existe');
      },
      error => {
        console.log('erreur');
      }
    );
  }

  public  findBylibelle(categorie: Categorie) {
    this.http.get<Categorie>('http://localhost:9090/agencelocation/categorie/libelle' + categorie.libelle).subscribe(
      data => {
        this.categorie = data;
        console.log('data existe');
      },
      error => {
        console.log('erreur');
      }
    );
  }



  private cloneCategorie(categorie: Categorie) {
    const clonne = new Categorie();
    clonne.libelle = categorie.libelle;
    clonne.porte = categorie.porte;
    clonne.siege = categorie.siege;
    clonne.marque = categorie.marque;
    return clonne;
  }

  get categorie(): Categorie {
    if (this._categorie == null) {
      this._categorie = new Categorie();
    }
    return this._categorie;
  }

  set categorie(value: Categorie) {
    this._categorie = value;
  }

  get categories(): Array<Categorie> {
    return this._categories;
  }

  set categories(value: Array<Categorie>) {
    this._categories = value;
  }
}

import { Injectable } from '@angular/core';
import {EtatLieu} from '../model/etat-lieu.model';
import {Consigne} from '../model/consigne.model';
import {EtatLieuItems} from '../model/etat-lieu-items.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtatLieuItemsService {

  private _etatLieuItems: EtatLieuItems ;
  private _etatLieuItemsListe: Array<EtatLieuItems> ;
  private _etatLieu: EtatLieu ;
  private _etatLieus: Array<EtatLieu>;
  private _consigne: Consigne;
  private _consignes: Array<Consigne>;
    private _etatLieuItemssByGravite: Array<EtatLieuItems> ;

  private _url = 'http://localhost:9090/agenceLocation/etatLieuItems/' ;


  constructor(private http: HttpClient) { }


  get etatLieus(): Array<EtatLieu> {
    if (this._etatLieus == null) {
      this._etatLieus = new Array<EtatLieu>();
    }
    return this._etatLieus;
  }

  set etatLieus(value: Array<EtatLieu>) {
    this._etatLieus = value;
  }

  get consignes(): Array<Consigne> {
    if (this._consignes == null) {
      this._consignes = new Array<Consigne>();
    }
    return this._consignes;
  }

  get consigne(): Consigne {
    if (this._consigne == null) {
      this._consigne = new Consigne();
    }
    return this._consigne;
  }

  set consigne(value: Consigne) {
    this._consigne = value;
  }

  set consignes(value: Array<Consigne>) {
    this._consignes = value;
  }

  get etatLieuItems(): EtatLieuItems {
    if (this._etatLieuItems == null) {
      this._etatLieuItems = new EtatLieuItems();
    }
    return this._etatLieuItems;
  }

  set etatLieuItems(value: EtatLieuItems) {
    this._etatLieuItems = value;
  }

  get etatLieu(): EtatLieu {
    return this._etatLieu;
  }

  set etatLieu(value: EtatLieu) {
    this._etatLieu = value;
  }

  get etatLieuItemssByGravite(): Array<EtatLieuItems> {
    return this._etatLieuItemssByGravite;
  }

  set etatLieuItemssByGravite(value: Array<EtatLieuItems>) {
    this._etatLieuItemssByGravite = value;
  }

  get etatLieuItemsListe(): Array<EtatLieuItems> {
    if (this._etatLieuItemsListe == null) {
      this._etatLieuItemsListe = new Array<EtatLieuItems>();
    }
    return this._etatLieuItemsListe;
  }

  set etatLieuItemsListe(value: Array<EtatLieuItems>) {
    this._etatLieuItemsListe = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  private cloneEtatLieuItems(etatLieuItems: EtatLieuItems) {
    const myClone = new EtatLieuItems();
    myClone.gravite = etatLieuItems.gravite;
    myClone.etatLieu = etatLieuItems.etatLieu;
    myClone.consigne = etatLieuItems.consigne;
    return myClone;
  }
  public save(etatLieuItems: EtatLieuItems) {
    this.http.post<number>('http://localhost:9090/agenceLocation/etatLieuItems/' , this._etatLieuItems).subscribe(
      data => {
        if (data > 0) {
          this.etatLieuItemsListe.push(this.cloneEtatLieuItems(this._etatLieuItems));
          this._etatLieuItems = null ;
        }
      }, eror => {
        console.log('errueur de save');
      }
    );
  }
  public validateSave(): boolean {
    return this.etatLieuItems.gravite != null ;
  }
  public findAll() {
    this.http.get<Array<EtatLieuItems>>('http://localhost:9090/agenceLocation/etatLieuItems/').subscribe(
      data => {
        console.log(' all data ' + data);
        this.etatLieuItemsListe = data;
      }
    );
  }
  public  deleteByGravite(etatLieuItems: EtatLieuItems) {
    this.http.delete<number>(this._url + 'gravite/' + etatLieuItems.gravite).subscribe(
      data => {
        console.log('deleted data ' + data);
        this.deleteByGraviteFromView(etatLieuItems);
      }, error => {
        console.log('erreur');
      }
    );
  }
  public deleteByGraviteFromView(etatLieuItems: EtatLieuItems) {
    const index = this.etatLieuItemssByGravite.findIndex(c => c.gravite === etatLieuItems.gravite );
    if (index !== -1) {
      this.etatLieuItemssByGravite.splice(index, 1);
    }
  }

  public findByGravite(etatLieuItems: EtatLieuItems) {
    this.http.get<Array<EtatLieuItems>>(this._url + 'gravite/' + etatLieuItems.gravite).subscribe(
      data => {
        if (data != null) {
          this.etatLieuItemssByGravite = data;
          console.log('data ' + data );
          this._etatLieuItems = null ;
        }
      }, error => {
        console.log('error');
      }
    );
  }

}

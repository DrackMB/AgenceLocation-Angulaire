import { Injectable } from '@angular/core';
import {Consigne} from '../model/consigne.model';
import {EtatLieu} from '../model/etat-lieu.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsigneService {

  private _consigne: Consigne ;
  private _etatLieu: EtatLieu ;
  private _etatLieus: Array<EtatLieu>;
  private _consignes: Array<Consigne> ;
  private _consigneByLibelle : Consigne;
  private _consignesByEtatLieu: Array<Consigne>;

  private _url = 'http://localhost:9090/agenceLocation/consigne/' ;

  constructor(private http: HttpClient) { }


  get consigne(): Consigne {
    if (this._consigne == null) {
      this._consigne = new Consigne();
    }
    return this._consigne;
  }

  set consigne(value: Consigne) {
    this._consigne = value;
  }

  get etatLieus(): Array<EtatLieu> {
    if (this._etatLieus == null){
      this._etatLieus = new Array<EtatLieu>();
    }
    return this._etatLieus;
  }

  set etatLieus(value: Array<EtatLieu>) {
    this._etatLieus = value;
  }

  get etatLieu(): EtatLieu {
    if (this._etatLieu == null) {
      this._etatLieu = new EtatLieu();
    }
    return this._etatLieu;
  }

  set etatLieu(value: EtatLieu) {
    this._etatLieu = value;
  }

  get consignes(): Array<Consigne> {
    if (this._consignes == null) {
      this._consignes = new Array<Consigne>();
    }
    return this._consignes;
  }

  set consignes(value: Array<Consigne>) {
    this._consignes = value;
  }

  get consigneByLibelle(): Consigne {
    if (this._consigneByLibelle == null) {
      this._consigneByLibelle = new Consigne();
    }
    return this._consigneByLibelle;
  }

  set consigneByLibelle(value: Consigne) {
    this._consigneByLibelle = value;
  }

  get consignesByEtatLieu(): Array<Consigne> {
    if (this._consignesByEtatLieu == null) {
      this._consignesByEtatLieu = new Array<Consigne>();
    }
    return this._consignesByEtatLieu;
  }

  set consignesByEtatLieu(value: Array<Consigne>) {
    this._consignesByEtatLieu = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  private cloneConseigne(consigne: Consigne) {
    const myClone = new Consigne();
    myClone.libelle = consigne.libelle;
    myClone.etatLieu = consigne.etatLieu;
    return myClone;
  }
  public save(consigne: Consigne) {
    this.http.post<number>('http://localhost:9090/agenceLocation/consigne/', this.consigne).subscribe(
      data => {
        if (data > 0) {
          this.consignes.push(this.cloneConseigne(this.consigne));
          this.consigne = null ;
        }
      }, eror => {
        console.log('errueur de save');
      }
    );
  }
  public validateSave(): boolean {
    return this.consigne.libelle != null ;
  }
  public findAll() {
    this.http.get<Array<Consigne>>('http://localhost:9090/agenceLocation/consigne/').subscribe(
      data => {
        console.log(' all data ' + data);
        this.consignes = data;
      }
    );

  }
  public findBylibelle(consigne: Consigne) {
    this.http.get<Consigne>(this._url + 'libelle/' + consigne.libelle).subscribe(
      data => {
        if (data != null) {
          this.consigneByLibelle = data;
          console.log('data ' + data );
          this.consigne = null ;
        }
      }, error => {
        console.log('error');
      }
    );
  }
  public  deleteBylibelle(consigne: Consigne) {
    this.http.delete<number>(this._url + 'libelle/' + consigne.libelle).subscribe(
      data => {
        console.log('deleted data ' + data);
        this.deleteBylibelleFromView(consigne);
      }, error => {
        console.log('erreur');
      }
    );
  }
  public deleteBylibelleFromView(consigne: Consigne) {
    const index = this.consignes.findIndex(c => c.libelle === consigne.libelle);
    if (index !== -1) {
      this.consignes.splice(index, 1);
    }
  }
  public findByEtatLieuReference(etatLieu: EtatLieu) {
    this.http.get<Array<Consigne>>(this._url + 'reference/' + etatLieu.reference).subscribe(
      data => {
        if (data != null) {
          this._consignesByEtatLieu = data ;
          console.log('data ' + data );
          this.consigne = null ;
        }
      }, error => {
        console.log('error');
      }
    );
  }

}

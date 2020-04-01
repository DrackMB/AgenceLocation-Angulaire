import {Injectable} from '@angular/core';
import {VoiturePricing} from '../model/voiture-pricing.model';
import {HttpClient} from '@angular/common/http';
import {Voiture} from '../model/voiture.model';
import {Agence} from '../model/agence.model';
import {Categorie} from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class VoiturePricingService {

  private _voiturePricing: VoiturePricing;
  private _porcentage: number;
  private _agence: Agence;
  private _voiturePrincins: Array<VoiturePricing>;
  private _voiturePricingResult: VoiturePricing;
  private  url = 'http://localhost:9090/VoiturePricing';

  constructor(private http: HttpClient) { }
  public save(voiturePricing: VoiturePricing) {
    console.log(voiturePricing);
    this.http.post<number>(this.url + '/Porcentage/' + this.porcentage ,
      voiturePricing
    ).subscribe(
      data => {
        console.log(data);
        if (data > 0) {
          this.voiturePrincins.push(this.cloneSimple(voiturePricing));
          console.log(data);
        }

      }, error => {
          console.log('errorrrrr');
      }
    );

  }

  deleteByCategorieLibelle(voiturePricing: VoiturePricing) {
    this.http.delete<number>(this.url + '/CategorieLibelle/' + voiturePricing.categorie.libelle ).subscribe(
      data => {
          console.log(data);
      }, error => {
          console.log('eroooore');
      }
    );
  }
  findByCategorieLibelle() {
    this.http.get<VoiturePricing>(this.url + '/CategorieLibelle/' + this.voiturePricing.categorie.libelle).subscribe(
      data => {
               this._voiturePricingResult = data;
      }, error => {
             console.log('erooooer fl get');
      }
    );
  }
  updateVoiturePricing(voiturePricing: VoiturePricing) {
    this.http.put<number>( this.url + '/categorie/date/' + this.voiturePricing.datefin + '/porcentage/' + this.porcentage, voiturePricing ).subscribe(
       data => {
           console.log(data);
       }, error => {
           console.log('erooore f delete');
      }
    );
  }
  findByAgenceNom() {
    this.http.get<Array<VoiturePricing>>(this.url + '/Agence/nom/' + this.cloneAgence(this.agence).nom).subscribe(
      data => {
          this.voiturePrincins = data;
      }, error => {
          console.log('erroore');
      }
    );
  }
 findAllVoiturePricing() {
    this.http.get<Array<VoiturePricing>>( this.url + '/' ).subscribe(
      data => {
          this.voiturePrincins = data;
      }, error => {
          console.log(error);
      }
    )
 }

  get voiturePricing(): VoiturePricing {
    if (this._voiturePricing == null) {
      this._voiturePricing = new VoiturePricing();
    }
    return this._voiturePricing;
  }

  set voiturePricing(value: VoiturePricing) {
    this._voiturePricing = value;
  }

  get porcentage(): number {
    return this._porcentage;
  }

  set porcentage(value: number) {
    this._porcentage = value;
  }

  get agence(): Agence {
    if (this.agence == null) {
      this.agence = new Agence();
    }
    return this._agence;
  }

  set agence(value: Agence) {
    this._agence = value;
  }


  get voiturePrincins(): Array<VoiturePricing> {
    if (this._voiturePrincins == null) {
      this._voiturePrincins = new Array<VoiturePricing>();
    }
    return this._voiturePrincins;
  }

  set voiturePrincins(value: Array<VoiturePricing>) {
    this._voiturePrincins = value;
  }


  get voiturePricingResult(): VoiturePricing {
    if ( this._voiturePricingResult == null ) {
      this._voiturePricingResult = new VoiturePricing();
    }
    return this._voiturePricingResult;
  }

  set voiturePricingResult(value: VoiturePricing) {
    this._voiturePricingResult = value;
  }

  cloneSimple(voiturePricing: VoiturePricing): VoiturePricing {
    const myCloner = new VoiturePricing();
    myCloner.datefin = voiturePricing.datefin;
    myCloner.dateDebut = voiturePricing.datefin;
    myCloner.categorie = voiturePricing.categorie;
    myCloner.prix = voiturePricing.prix;
    myCloner.agence = voiturePricing.agence;
    return myCloner;

  }

  cloneAgence(agence: Agence): Agence {
    const myCloner = new Agence();
    myCloner.nom = agence.nom;
    myCloner.adress = agence.adress;
    myCloner.code = agence.code;
    myCloner.numTele = agence.numTele;
    myCloner.ville = agence.ville;
    return myCloner;

  }



}

import {Injectable} from '@angular/core';
import {VoiturePricing} from '../model/voiture-pricing.model';
import {HttpClient} from '@angular/common/http';
import {Voiture} from '../model/voiture.model';

@Injectable({
  providedIn: 'root'
})
export class VoiturePricingService {

  private _voiturPricing: VoiturePricing;
  private _voiture: Voiture;
  private _porcentage: number;
  private _dateFin: Date;
  private _dateDebut: Date;

  constructor(private http: HttpClient) { }
  public save(_voiture, _dateFin, _dateDebut, _porcentage) {
    this.http.post<number>('http://localhost:9090/VoiturePricing/Porcentage/' + _porcentage + '/dateFinal/' + _dateFin + '/dateDebu/' + _dateDebut, {
      _voiture
     }).subscribe(
      data => {
            console.log(data);
      }, error => {
          console.log('errorrrrr');
      }
    );

  }

  get voiturPricing(): VoiturePricing {
    if (this._voiturPricing == null) {
      this._voiturPricing = new VoiturePricing();
    }
    return this._voiturPricing;
  }

  set voiturPricing(value: VoiturePricing) {
    this._voiturPricing = value;
  }

  get voiture(): Voiture {
    if (this._voiture == null) {
      this._voiture = new Voiture();
    }
    return this._voiture;
  }

  set voiture(value: Voiture) {
    this._voiture = value;
  }

  get porcentage(): number {
    return this._porcentage;
  }

  set porcentage(value: number) {
    this._porcentage = value;
  }

  get dateFin(): Date {
    return this._dateFin;
  }

  set dateFin(value: Date) {
    this._dateFin = value;
  }

  get dateDebut(): Date {
    return this._dateDebut;
  }

  set dateDebut(value: Date) {
    this._dateDebut = value;
  }
}

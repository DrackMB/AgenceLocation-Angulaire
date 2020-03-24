import {Component, OnInit} from '@angular/core';
import {Voiture} from '../Controller/model/voiture.model';
import {VoiturePricingService} from '../Controller/service/voiture-pricing-service';
import {VoitureService} from '../Controller/service/voiture-service';
import {newArray} from '@angular/compiler/src/util';

@Component({
  selector: 'app-voiture-pricing',
  templateUrl: './voiture-pricing.component.html',
  styleUrls: ['./voiture-pricing.component.css']
})
export class VoiturePricingComponent implements OnInit {
/*  private _voiture: Voiture;
  private _dateFin: Date;
  private _dateDebut: Date ;
  private _porcentage: number ;
*/

  constructor(private voiturePricingService: VoiturePricingService, private voitureService: VoitureService) { }
  get voitureResult(): Array<Voiture> {
   return  this.voitureService.voitureResult;
  }
  ngOnInit(): void {
    this.voitureService.findAll();
  }
  save() {
    console.log(this.voiture);
   // this.voiturePricingService.save(this.voiture, this.dateFin , this.dateDebut , this.porcentage);
    this.voiturePricingService.save(this.voiture, this.dateFin, this.dateDebut, this.porcentage);
  }

  get voiture(): Voiture {
    return this.voiturePricingService.voiture;
  }

  set voiture(value: Voiture) {
    this.voiturePricingService.voiture = value;
  }

  get dateFin(): Date {
    return this.voiturePricingService.dateFin;
  }

  set dateFin(value: Date) {
    this.voiturePricingService.dateFin = value;
  }

  get dateDebut(): Date {
    return this.voiturePricingService.dateDebut;
  }

  set dateDebut(value: Date) {
    this.voiturePricingService.dateDebut = value;
  }

  get porcentage(): number {
    return this.voiturePricingService.porcentage;
  }

  set porcentage(value: number) {
    this.voiturePricingService.porcentage = value;
  }

}

import {Component, OnInit} from '@angular/core';
import {Voiture} from '../Controller/model/voiture.model';
import {VoiturePricingService} from '../Controller/service/voiture-pricing-service';
import {VoitureService} from '../Controller/service/voiture-service';
import {newArray} from '@angular/compiler/src/util';
import {VoiturePricing} from '../Controller/model/voiture-pricing.model';

@Component({
  selector: 'app-voiture-pricing',
  templateUrl: './voiture-pricing.component.html',
  styleUrls: ['./voiture-pricing.component.css']
})
export class VoiturePricingComponent implements OnInit {

  constructor(private voiturePricingService: VoiturePricingService, private voitureService: VoitureService) { }

  get voitureResult(): Array<Voiture> {
   return  this.voitureService.voitureResult;
  }
  get porcentage(): number {
    return this.voiturePricingService.porcentage;
  }
  set porcentage(value: number) {
    this.voiturePricingService.porcentage = value;
  }
  get voiturePricing(): VoiturePricing {
    return this.voiturePricingService.voiturePricing;
  }
  ngOnInit(): void {
    this.voitureService.findAll();
  }

  save(voiturePricing: VoiturePricing) {
    this.voiturePricingService.save(voiturePricing);
    console.log(voiturePricing.categorie);
    console.log(this.porcentage);
    console.log(voiturePricing.datefin);
  }






}

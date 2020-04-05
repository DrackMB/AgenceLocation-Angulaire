import {Component, OnInit} from '@angular/core';
import {Voiture} from '../Controller/model/voiture.model';
import {VoiturePricingService} from '../Controller/service/voiture-pricing-service';
import {VoitureService} from '../Controller/service/voiture-service';
import {newArray} from '@angular/compiler/src/util';
import {VoiturePricing} from '../Controller/model/voiture-pricing.model';
import {CategorieService} from '../Controller/service/categorie.service';
import {Categorie} from '../Controller/model/categorie.model';

@Component({
  selector: 'app-voiture-pricing',
  templateUrl: './voiture-pricing.component.html',
  styleUrls: ['./voiture-pricing.component.css']
})
export class VoiturePricingComponent implements OnInit {
  private editField: string;

  constructor(private voiturePricingService: VoiturePricingService, private voitureService: VoitureService, private categorieService: CategorieService) { }

  get voitureResultMB(): Array<Voiture> {
   return  this.voitureService.voitureResultMB;
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
  get voiturePrincins(): Array<VoiturePricing> {
    return this.voiturePricingService.voiturePrincins;
  }
  get voiturePricingResult(): VoiturePricing {
    return  this.voiturePricingService.voiturePricingResult;
  }
  get categories(): Array<Categorie> {
    return   this.categorieService.categories;
  }
  ngOnInit(): void {
    this.voitureService.findall();
    this.voiturePricingService.findAllVoiturePricing();
    this.categorieService.findall();
  }

  save(voiturePricing: VoiturePricing) {

    this.voiturePricingService.save(voiturePricing);

    console.log(this.porcentage);
    console.log(voiturePricing.datefin);
  }
  deleteByCategorieLibelle(voiturePricing: VoiturePricing) {
    this.voiturePricingService.deleteByCategorieLibelle(voiturePricing);
  }

  updateVoiturePricing(voiturePricing: VoiturePricing) {
    this.voiturePricingService.updateVoiturePricing(voiturePricing);
  }
  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }




}

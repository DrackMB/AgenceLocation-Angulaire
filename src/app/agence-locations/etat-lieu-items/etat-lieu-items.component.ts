import { Component, OnInit } from '@angular/core';
import {EtatLieuItemsService} from '../Controller/service/etat-lieu-items.service';
import {EtatLieuItems} from '../Controller/model/etat-lieu-items.model';
import {EtatLieu} from '../Controller/model/etat-lieu.model';
import {Consigne} from '../Controller/model/consigne.model';
import {EtatLieuService} from '../Controller/service/etat-lieu.service';
import {ConsigneService} from '../Controller/service/consigne.service';
import {VoitureService} from '../Controller/service/voiture-service';

@Component({
  selector: 'app-etat-lieu-items',
  templateUrl: './etat-lieu-items.component.html',
  styleUrls: ['./etat-lieu-items.component.css']
})
export class EtatLieuItemsComponent implements OnInit {

  constructor(private etatLieuItemsService: EtatLieuItemsService, private etatLieuService: EtatLieuService, private consigneService: ConsigneService) { }

  ngOnInit(): void {
    this.etatLieuItemsService.findAll();
    this.etatLieuService.findAll();
    this.consigneService.findAll();
  }
  get etatLieus(): Array<EtatLieu> {
    return this.etatLieuService.etatLieus;
  }
  get etatLieuItems(): EtatLieuItems {
    return this.etatLieuItemsService.etatLieuItems;
  }
  get etatLieu(): EtatLieu {
    return this.etatLieuService.etatLieu;
  }
  get consigne(): Consigne {
    return this.consigneService.consigne;
  }
  get consignes(): Array<Consigne> {
    return this.consigneService.consignes;
  }
  get etatLieuItemssByGravite(): Array<EtatLieuItems> {
    return this.etatLieuItemsService.etatLieuItemssByGravite;
  }
  get etatLieuItemsListe(): Array<EtatLieuItems> {
    return this.etatLieuItemsService.etatLieuItemsListe;
  }
  public save(etatLieuItems: EtatLieuItems) {
    return this.etatLieuItemsService.save(etatLieuItems);
  }
  public validateSave(): boolean {
    return this.etatLieuItemsService.validateSave();
  }
  public findAll() {
    return this.etatLieuItemsService.findAll();
  }
  public  deleteByGravite(etatLieuItems: EtatLieuItems) {
    return this.etatLieuItemsService.deleteByGravite(etatLieuItems);
  }
  public findByGravite(etatLieuItems: EtatLieuItems) {
    return this.etatLieuItemsService.findByGravite(etatLieuItems);
  }

}

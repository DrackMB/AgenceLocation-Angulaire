import { Component, OnInit } from '@angular/core';
import {EtatLieuService} from '../Controller/service/etat-lieu.service';
import {EtatLieu} from '../Controller/model/etat-lieu.model';
import {EtatLieuItemsService} from '../Controller/service/etat-lieu-items.service';
import {ConsigneService} from '../Controller/service/consigne.service';
import {EtatLieuItems} from '../Controller/model/etat-lieu-items.model';
import {Consigne} from '../Controller/model/consigne.model';
import {LocationDetail} from '../Controller/model/location-detail.model';
import {LocationDetailService} from '../Controller/service/location-detail.service';
import {ClientService} from '../Controller/service/client.service';
import {Client} from '../Controller/model/client.model';
import {VoitureService} from '../Controller/service/voiture-service';
import {Voiture} from '../Controller/model/voiture.model';

@Component({
  selector: 'app-etat-lieu',
  templateUrl: './etat-lieu.component.html',
  styleUrls: ['./etat-lieu.component.css']
})
export class EtatLieuComponent implements OnInit {

  constructor(private etatLieuService: EtatLieuService , private etatLieuItemsService: EtatLieuItemsService , private consigneService: ConsigneService, private locationDetailService: LocationDetailService, private voitureService: VoitureService, private clientService: ClientService) { }

  ngOnInit(): void {
    this.etatLieuService.findAll();
    this.etatLieuItemsService.findAll();
    this.consigneService.findAll();
    this.voitureService.findall();
  }
  get voitureResult(): Array<Voiture> {
    return this.voitureService.voitureResult;
  }
 get clients(): Array<Client> {
    return this.clientService.clients;
 }
  get client(): Client {
    return this.clientService.client;
  }
  get locationDetail(): LocationDetail {
  return this.locationDetailService.locationDetail;
}
  get locationDetailResult(): Array<LocationDetail> {
    return this.locationDetailService.locationDetailResult;
  }
  get etatLieu(): EtatLieu {
    return this.etatLieuService.etatLieu;
  }
  get etatLieuByReference(): EtatLieu {
    return this.etatLieuService.etatLieuByReference;
  }
  get etatLieuByLocationDetailprix(): Array<EtatLieu> {
    return this.etatLieuService.etatLieusByLocationDetailprix;
  }
  get etatLieus(): Array<EtatLieu> {
    return this.etatLieuService.etatLieus;
  }
  get consigne(): Consigne {
    return this.consigneService.consigne;
  }
  get consignes(): Array<Consigne> {
    return this.consigneService.consignes;
  }
  get etatLieuItemsListe(): Array<EtatLieuItems> {
    return this.etatLieuItemsService.etatLieuItemsListe;
  }
  get etatLieuItems(): EtatLieuItems {
    return this.etatLieuItemsService.etatLieuItems;
  }
  get etatLieusByDateEtatLieu(): Array<EtatLieu> {
    return this.etatLieuService.etatLieusByDateEtatLieu ;
  }
  get etatLieusByLocationDetailVoitureMatricule(): Array<EtatLieu> {
    return this.etatLieuService.etatLieusByLocationDetailVoitureMatricule;
  }
  get etatLieusByLocationDetailDateLocation(): Array<EtatLieu> {
    return this.etatLieuService.etatLieusByLocationDetailDateLocation ;
  }
  get etatLieusByLocationDetailDateRetour(): Array<EtatLieu> {
    return this.etatLieuService.etatLieusByLocationDetailDateRetour ;
  }
  get etatLieusByLocationDetailClientCin(): Array<EtatLieu> {
    return this.etatLieuService.etatLieusByLocationDetailClientCin;
  }
  public  deleteByReference(etatLieu: EtatLieu) {
    return this.etatLieuService.deleteByReference(etatLieu);
  }
  public findAll() {
    return this.etatLieuService.findAll();
  }
  public findByReference(etatLieu: EtatLieu) {
    return this.etatLieuService.findByReference(etatLieu);
  }
  public findByDateEtatLieu(etatLieu: EtatLieu) {
    return this.etatLieuService.findByDateEtatLieu(etatLieu);
  }
  public save(etatLieu: EtatLieu) {
   return  this.etatLieuService.save(etatLieu);
  }

  public validateSave() {
    return this.etatLieuService.validateSave();
  }
  public  deleteByLocationDetailVoitureMatricule(locationDetail: LocationDetail) {
    return this.etatLieuService.etatLieusByLocationDetailVoitureMatricule;
  }
  public findByLocationDetailVoitureMatricule(locationDetail: LocationDetail) {
    return this.etatLieuService.etatLieusByLocationDetailVoitureMatricule;
  }
  public findByLocationDetailDateLocation(locationDetail: LocationDetail) {
    return this.etatLieuService.etatLieusByLocationDetailDateLocation;
  }
  public findByLocationDetailDateRetour(locationDetail: LocationDetail) {
    return this.etatLieuService.etatLieusByLocationDetailDateRetour;
  }
  public findByLocationDetailLocationPrix(locationDetail: LocationDetail) {
    return this.etatLieuService.etatLieusByLocationDetailprix;
  }

}

import { Component, OnInit } from '@angular/core';
import {ConsigneService} from '../Controller/service/consigne.service';
import {Consigne} from '../Controller/model/consigne.model';
import {EtatLieu} from '../Controller/model/etat-lieu.model';
import {EtatLieuService} from '../Controller/service/etat-lieu.service';

@Component({
  selector: 'app-consigne',
  templateUrl: './consigne.component.html',
  styleUrls: ['./consigne.component.css']
})
export class ConsigneComponent implements OnInit {

  constructor(private consigneService: ConsigneService , private  etatLieuService: EtatLieuService) { }

  ngOnInit(): void {
    this.consigneService.findAll();
  }
  get consigne(): Consigne {
    return this.consigneService.consigne;
  }
  get etatLieus(): Array<EtatLieu> {
    return  this.etatLieuService.etatLieus;
  }
  get etatLieu(): EtatLieu {
    return this.etatLieuService.etatLieu;
  }
  get consignes(): Array<Consigne> {
    return this.consigneService.consignes;
  }
  get consigneByLibelle(): Consigne {
    return this.consigneService.consigneByLibelle;
  }
  get consignesByEtatLieu(): Array<Consigne> {
    return this.consignesByEtatLieu;
  }
  public save(consigne: Consigne) {
    return this.consigneService.save(consigne);
  }
  public validateSave(): boolean {
    return this.consigneService.validateSave();
  }
  public findAll() {
    return this.consigneService.findAll();
  }
  public findBylibelle(consigne: Consigne) {
    return this.consigneService.findBylibelle(consigne);
  }
  public  deleteBylibelle(consigne: Consigne) {
    return this.consigneService.deleteBylibelle(consigne);
  }
  public findByEtatLieuReference(etatLieu: EtatLieu) {
    return this.consigneService.findByEtatLieuReference(etatLieu);
  }
}

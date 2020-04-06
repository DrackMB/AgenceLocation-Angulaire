import { Component, OnInit } from '@angular/core';
import {Agence} from '../Controller/model/agence.model';
import {AgenceService} from '../Controller/service/agence.service';
import {VilleService} from '../Controller/service/ville.service';
import {Ville} from '../Controller/model/ville.model';



@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {


  constructor(private agenceService: AgenceService , private villeService: VilleService) { }

  ngOnInit(): void {
    this.agenceService.findAll();
    this.villeService.findAll();
  }
  get ville(): Ville {
    return this.villeService.ville;
  }
  get villes(): Array<Ville> {
    return this.villeService.villes;
  }
  get agence(): Agence {
    return this.agenceService.agence;
  }
  get agences(): Array<Agence> {
    return this.agenceService.agences;
  }

  get agenceByCode(): Agence {
    return this.agenceService.agenceByCode;
  }
  get agencesByNom(): Array<Agence> {
    return this.agenceService.agencesByNom;
  }
  get agencesByVille(): Array<Agence> {
    return this.agenceService.agencesByVille;
  }
  public save(agence: Agence) {
    return this.agenceService.save(agence);
  }
  public findAll() {
    return this.agenceService.findAll();
  }
  public findByCode(agence: Agence) {
    return this.agenceService.findByCode(agence);
  }
  public findByNom(agence: Agence) {
    return this.agenceService.findByNom(agence);
  }
  public findByVille(agence: Agence) {
    return this.agenceService.findByVille(agence);
  }
  public deleteByCode(agence: Agence) {
    return this.agenceService.deleteByCode(agence);
  }
  public deleteByNom(agence: Agence) {
    return this.agenceService.deleteByNom(agence);
  }
   public validatSave(): boolean {
    return this.agenceService.validateSave();
  }
}

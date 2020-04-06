import { Component, OnInit } from '@angular/core';
import {Ville} from '../Controller/model/ville.model';
import {VilleService} from '../Controller/service/ville.service';
import {AgenceService} from '../Controller/service/agence.service';
import {Agence} from '../Controller/model/agence.model';
import {PaysService} from '../Controller/service/pays.service';
import {Pays} from '../Controller/model/pays.model';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {

  constructor(private villeService: VilleService, private agenceService: AgenceService, private paysService: PaysService) { }

  ngOnInit(): void {
    this.villeService.findAll();
    this.agenceService.findAll();
  }

  get pays(): Pays {
    return this.villeService.pays;
  }
  get agence(): Agence {
    return this.agenceService.agence;
  }
  get agences(): Array<Agence> {
    return this.agenceService.agences;
  }
get ville(): Ville {
  return this.villeService.ville;
}
get villes(): Array<Ville> {
  return this.villeService.villes;
}

get villeByNom(): Ville {
  return this.villeService.villeByNom;
}

  public save(ville: Ville) {
    return this.villeService.save(ville);
  }
  public findAll() {
    return this.villeService.findAll();
  }
  public deleteByNom(ville: Ville) {
    return this.villeService.deleteByNom(ville);
  }
  public findByNom(ville: Ville) {
    return this.villeService.findByNom(ville);
  }
  public validateSave(): boolean {
    return this.villeService.validateSave();

  }
}

import { Component, OnInit } from '@angular/core';
import {VoitureService} from '../Controller/service/voiture-service';
import {Voiture} from '../Controller/model/voiture.model';
import {Transmition} from '../Controller/model/transmition.model';
import {CategorieService} from '../Controller/service/categorie.service';
import {CarburantService} from '../Controller/service/carburant-service';
import {TransmitionService} from '../Controller/service/transmition-service';
import {Agence} from '../Controller/model/agence.model';
import {AgenceService} from '../Controller/service/agence.service';
import {Carburant} from '../Controller/model/carburant.model';
import {Categorie} from '../Controller/model/categorie.model';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  get voitureResult(): Array<Voiture> {
    return this.voitureService.voitureResult;
  }
  constructor(private voitureService: VoitureService ,private agenceService: AgenceService,private  categorieService: CategorieService ,private carburantService: CarburantService ,private transmitionService: TransmitionService) { }
  ngOnInit(): void {
  this.voitureService.findAll();
    this.agenceService.findall();
    this.transmitionService.findAll();
    this.carburantService.findAll();
    this.transmitionService.findAll();
  }
  public save2() {
    return this.voitureService.save2();
  }
  public deletByMatricule(voiture: Voiture){
    return this.voitureService.deleteByMatricule(voiture);
  }
  public findall(){
    return this.voitureService.findAll();
  }
  get voiture():Voiture {
    return this.voitureService.voiture;
  }

  get agences(): Array<Agence> {
    return this.agenceService.agences;
  }

  get carburants(): Array<Carburant> {
    return this.carburantService.carburants;
  }
  get transmitions(): Array<Transmition> {
    return this.transmitionService.transmitions;
  }
  get categories(): Array<Categorie> {
    return this.categorieService.categories;
  }
}

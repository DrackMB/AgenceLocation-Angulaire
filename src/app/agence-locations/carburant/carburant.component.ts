import { Component, OnInit } from '@angular/core';
import {CarburantService} from '../Controller/service/carburant-service';
import {Carburant} from '../Controller/model/carburant.model';
import {Transmition} from '../Controller/model/transmition.model';

@Component({
  selector: 'app-carburant',
  templateUrl: './carburant.component.html',
  styleUrls: ['./carburant.component.css']
})
export class CarburantComponent implements OnInit {
   test = false;
  constructor(private carburantService: CarburantService) { }
  get carburants(): Array<Carburant> {
    return this.carburantService.carburants;
  }
  get carburant(): Carburant {
    return this.carburantService.carburant;
  }
  get carburantfoanded(): Carburant {
    return this.carburantService.carburantfoanded;
  }

  ngOnInit(): void {
    this.carburantService.findAll();
  }
  save() {
    this.carburantService.save(this.carburant);
  }

  findByCarburantLibelle(carburant: Carburant) {
    return this.carburantService.findByCarburantLibelle(carburant);
  }

  findByLibelle(carburant: Carburant) {
    return this.carburantService.findByLibelle(carburant);
  }
  deleteByLibelle(carburant: Carburant) {
    return this.carburantService.deleteByLibelle(carburant);
  }
  public cloneCarburant(carburant: Carburant): Carburant {
    return  this.carburantService.cloneCarburant(carburant);
  }
}

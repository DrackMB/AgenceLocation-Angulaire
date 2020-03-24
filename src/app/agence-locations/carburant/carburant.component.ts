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

  constructor(private carburantService: CarburantService) { }
  get carburants(): Array<Carburant> {
    return this.carburantService.carburants;
  }
  ngOnInit(): void {
    this.carburantService.findAll();
  }

}

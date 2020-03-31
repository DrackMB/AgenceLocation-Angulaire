import { Component, OnInit } from '@angular/core';
import {MarqueService} from '../Controller/service/marque.service';
import {Marque} from '../Controller/model/marque.model';
import {Categorie} from '../Controller/model/categorie.model';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {

  constructor(private marqueService: MarqueService) { }

  ngOnInit(): void {
  }

  public save() {
    this.marqueService.save();
  }
  get marque(): Marque {
    return this.marqueService.marque;
  }
  public findall() {
    this.marqueService.findall();
  }
  public findByMarqueLibelle(marque: Marque) {
    this.marqueService.findByMarqueLibelle(marque);
  }

  public findByLibelle(marque: Marque) {
    this.marqueService.findByLibelle(marque);
  }
  get marques(): Array<Marque> {
    return this.marqueService.marques;

  }

}

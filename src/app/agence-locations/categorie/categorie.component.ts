import { Component, OnInit } from '@angular/core';
import {Categorie} from '../Controller/model/categorie.model';
import {MarqueService} from '../Controller/service/marque.service';
import {CategorieService} from '../Controller/service/categorie.service';
import {Marque} from '../Controller/model/marque.model';
import {Voiture} from '../Controller/model/voiture.model';
import {VoitureService} from '../Controller/service/voiture-service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  constructor(private categorieService: CategorieService, private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.marqueService.findall();
  }
  get marques(): Array<Marque> {
    return this.marqueService.marques;
  }

  get marque(): Marque {
    return this.marqueService.marque;
  }


  get categorie(): Categorie {
    return this.categorieService.categorie;
  }
  get categories(): Array<Categorie> {
    return this.categorieService.categories;
  }

  public  findBylibelle(categorie: Categorie) {
    return this.categorieService.findBylibelle(categorie);
  }

  public save1() {
    return this.categorieService.save1();
  }
  public findall() {
    this.categorieService.findall();
  }



}

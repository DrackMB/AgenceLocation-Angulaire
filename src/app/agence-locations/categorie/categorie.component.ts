import { Component, OnInit } from '@angular/core';
import {Categorie} from '../Controller/model/categorie.model';
import {MarqueService} from '../Controller/service/marque.service';
import {CategorieService} from '../Controller/service/categorie.service';
import {Marque} from '../Controller/model/marque.model';

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
  get marques(): Array<Marque>{
    return this.marqueService.marques;
  }

  get marque(): Marque{
    return this.marqueService.marque;
  }

  public findByLibelle(libelle: string) {
    this.categorieService.findByLibelle('libelle')
  }

  get categorie(): Categorie {
    return this.categorieService.categorie;
  }
  get categories(): Array<Categorie> {
    return this.categorieService.categories;
  }

  public save1(){
    return this.categorieService.save1();
  }
  public findall() {
    this.categorieService.findall();
  }



}

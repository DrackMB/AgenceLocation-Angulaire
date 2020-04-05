import { Component, OnInit } from '@angular/core';
import {Administrateur} from "../Controller/model/administrateur.model";
import {AdministrateurService} from "../Controller/service/administrateur.service";

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrls: ['./administrateur.component.css']
})
export class AdministrateurComponent implements OnInit {

  constructor(private administrateurService : AdministrateurService) { }

  ngOnInit(): void {
  }
  get administrateur(): Administrateur {
    return this.administrateurService.administrateur;
  }
  public save(){
    this.administrateurService.save();

  }
}

import { Component, OnInit } from '@angular/core';
import {Agence} from '../Controller/model/agence.model';
import {AgenceService} from '../Controller/service/agence.service';
import {Categorie} from '../Controller/model/categorie.model';

@Component({
  selector: 'app-agence',
  templateUrl: './agence.component.html',
  styleUrls: ['./agence.component.css']
})
export class AgenceComponent implements OnInit {

  constructor(private agenceService: AgenceService) { }

  ngOnInit(): void {
  }

  get agence(): Agence {
    return this.agenceService.agence;

  }

  get agences(): Array<Agence>{
    return this.agenceService.agences;

  }
  public findall() {
    this.agenceService.findall();
  }
}

import { Component, OnInit } from '@angular/core';
import {VoitureService} from '../Controller/service/voiture-service';
import {Voiture} from '../Controller/model/voiture.model';
import {Transmition} from '../Controller/model/transmition.model';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  get voitureResult(): Array<Voiture> {
    return this.voitureService.voitureResult;
  }
  constructor(private voitureService: VoitureService) { }
  ngOnInit(): void {
  this.voitureService.findAll();
  }

}

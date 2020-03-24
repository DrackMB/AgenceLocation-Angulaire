import { Component, OnInit } from '@angular/core';
import {TransmitionService} from '../Controller/service/transmition-service';
import {Transmition} from '../Controller/model/transmition.model';

@Component({
  selector: 'app-transmition',
  templateUrl: './transmition.component.html',
  styleUrls: ['./transmition.component.css']
})
export class TransmitionComponent implements OnInit {

  constructor(private transmitionService: TransmitionService) { }
  get transmitions(): Array<Transmition> {
    return this.transmitionService.transmitions;
  }

  ngOnInit(): void {
    this.transmitionService.findAll();
  }
}

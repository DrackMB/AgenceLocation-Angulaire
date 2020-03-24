import {Component, OnInit} from '@angular/core';
import {VoiturePricingService} from './Controller/service/voiture-pricing-service';
import {Voiture} from './Controller/model/voiture.model';

@Component({
  selector: 'app-agence-locations',
  templateUrl: './agence-locations.component.html',
  styleUrls: ['./agence-locations.component.css']
})
export class AgenceLocationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



}

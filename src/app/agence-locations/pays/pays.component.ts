import { Component, OnInit } from '@angular/core';
import {PaysService} from '../Controller/service/pays.service';
import {Pays} from '../Controller/model/pays.model';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {


  constructor(private paysService: PaysService ) { }

  ngOnInit(): void {
    this.paysService.findAll();
  }
  get pays(): Pays {
    return this.paysService.pays;
  }
  get paysListe(): Array<Pays> {
    return this.paysService.paysListe;
  }

  get paysByNom(): Pays {
    return this.paysService.paysByNom;
  }

  public save(pays: Pays) {
    return this.paysService.save(pays);
  }
  public findAll() {
    return this.paysService.findAll();
  }
  public deleteByNom(pays: Pays) {
    return this.paysService.deleteByNom(pays);
  }
  public findByNom(pays: Pays) {
    return this.paysService.findByNom(pays);
  }
  public validateSave(): boolean {
    return this.paysService.validateSave();

  }
}

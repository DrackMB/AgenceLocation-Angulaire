import { Component, OnInit } from '@angular/core';
import {ClientService} from '../Controller/service/client.service';
import {Client} from '../Controller/model/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor( private clientService: ClientService) { }

  get client(): Client {
    return this.clientService.client;
  }
  get clients(): Array<Client> {
    return this.clientService.clients;
  }
  public save() {
    return this.clientService.save();
  }
  public findall() {
    return this.clientService.findAll();
  }
  public deletecin(client: Client) {
    return this.clientService.deleteByCin(this.client);
  }
  public findcin(client: Client) {
    return this.clientService.findByCin(this.client1);
  }
  get client1(): Client {
    return this.clientService.client1;
  }


    ngOnInit(): void {
    this.clientService.findAll();
  }

}

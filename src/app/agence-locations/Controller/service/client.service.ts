import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../model/client.model';
import {Agence} from '../model/agence.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
   private _client: Client;
   private _clients: Array <Client>;
   private _client1: Client;
  constructor(private http: HttpClient) {}

public save() {
    this.http.post<number>('http://localhost:9090/AgenceLocation/client/', this.client).subscribe(
      data => {
         this.clients.push(this.cloneClient(this.client));
         this.client = null;
         console.log(data);
      }, error => {
         console.log('kayen chi7aja f client');
      }
    );
}
public findAll() {
    this.http.get<Array<Client>>('http://localhost:9090/AgenceLocation/client/findAll/').subscribe(
      data => {
        this.clients = data;
      }, error => {
        console.log('chi7aja fl find');
      }
    );
}
  public  findByCin(client1: Client) {
    this.http.get<Client>('http://localhost:9090/AgenceLocation/client/cin/' + this.client1.cin).subscribe(
      data => {
        this.client1 = data;
        console.log(data);
      }, error => {
       console.log('kayen erore');
      }
    );
  }
  public  deleteByCin(client: Client) {
    this.http.delete('http://localhost:9090/AgenceLocation/client/cin/' + this.client.cin).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log('kayen erore f delete');
      }
    );
  }

  get client(): Client {
    if(this._client == null){
      this._client = new Client()
      ;
    }
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }


  get client1(): Client {
    if(this._client1 == null){
      this._client1 = new Client()
      ;
    }
    return this._client1;
  }

  set client1(value: Client) {
    this._client1 = value;
  }

  get clients(): Array<Client> {
    if(this._clients == null){
      this._clients = new Array<Client>();
    }
    return this._clients;
  }

  set clients(value: Array<Client>) {
    this._clients = value;
  }
  cloneClient(client: Client ) {
    const myCloner = new Client();
    myCloner.nom = client.nom;
    myCloner.prenom = client.prenom;
    myCloner.sexe = client.sexe;
    myCloner.cin = client.cin;
    myCloner.adress = client.adress;
    return myCloner;

  }

}

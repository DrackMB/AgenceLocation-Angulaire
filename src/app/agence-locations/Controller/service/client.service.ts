import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
   private _client: Client;
   private _clients: Array <Client>;
  constructor(private http: HttpClient) {}

public save(){
    this.http.post<number>('http://localhost:9090/AgenceLocation/client/',this._client).subscribe(
      data => {
         console.log(data);
      }, error => {
         console.log('kayen chi7aja f client');
      }
    )
}
public findAll(){
    this.http.get<Array<Client>>('http://localhost:9090/AgenceLocation/client/').subscribe(
      data => {
        this._clients = data;
      }, error => {
        console.log('chi7aja fl find');
      }
    );
}
  public  findByCin() {
    this.http.get<Client>('http://localhost:9090/AgenceLocation/client/cin/' + this._client.cin).subscribe(
      data => {
          console.log(data);
      }, error => {
       console.log('kayen erore');
      }
    );
  }
  public  deleteByCin() {
    this.http.delete('http://localhost:9090/AgenceLocation/client/cin/' + this._client.cin).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log('kayen erore f delete');
      }
    );
  }

  get client(): Client {
    if(this._client == null){
      this._client = new Client();
    }
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
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
}

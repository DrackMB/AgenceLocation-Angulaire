import {Client} from './client.model';
import {LocationDetail} from './location-detail.model';

export class Location {
  public  client: Client;
  public  dateLocation: Date;
  public  prixTotal: number;
  public  locationDetail = new Array<LocationDetail>() ;
}

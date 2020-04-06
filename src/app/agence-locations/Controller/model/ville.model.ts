import {Pays} from './pays.model';
import {Agence} from './agence.model';


export class Ville {
  public nom: string;
  public  code: number;
  public   pays: Pays;
  public agence = new Array<Agence>();
}




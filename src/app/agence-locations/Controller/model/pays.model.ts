
import {Ville} from './ville.model';

export class Pays {
  public  nom: string;
  public code: number;
  public ville = new Array<Ville>();
}


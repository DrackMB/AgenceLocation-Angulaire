import {Ville} from './ville.model';

import {Voiture} from './voiture.model';

export class Agence {
  public  nom: string;
  public numTele: number;
  public code: string;
  public adress: string;
  public ville: Ville;
  public voiture = new Array<Voiture>();
}

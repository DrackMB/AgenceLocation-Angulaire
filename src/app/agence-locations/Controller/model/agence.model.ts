import {Ville} from './ville.model';
import {Categorie} from './categorie.model';
import {Voiture} from './voiture.model';

export class Agence {
  public  nom: string;
  public adress: string;
  public numTele: string;
  public ville: Ville;
  public code: string;
  public voiture = new Array<Voiture>();
}

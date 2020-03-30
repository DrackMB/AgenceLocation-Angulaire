import {Marque} from './marque.model';
import {Voiture} from './voiture.model';

export class Categorie {
  public libelle: string;
  public porte: number;
  public siege: number;
  public marque: Marque;
  public voiture = new Array<Voiture>();
}

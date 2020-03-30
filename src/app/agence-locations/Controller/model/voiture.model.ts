import {Carburant} from './carburant.model';
import {Transmition} from './transmition.model';
import {Agence} from './agence.model';
import {Categorie} from './categorie.model';

export class Voiture {

  public categorie: Categorie;
  public carburant: Carburant;
  public transmition: Transmition;
  public matricule: string;
  public dateMiseEnCirculation: Date;
  public moyenNote: number;
  public agence: Agence;
  public  prixinitial: number;
}

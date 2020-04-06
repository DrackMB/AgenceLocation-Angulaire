import {EtatLieu} from './etat-lieu.model';

export class Consigne extends EtatLieu {
  public libelle: string ;
  public etatLieu: EtatLieu ;
}

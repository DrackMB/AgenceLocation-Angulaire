import {Consigne} from './consigne.model';
import {EtatLieuItems} from './etat-lieu-items.model';
import {LocationDetail} from './location-detail.model';


export class EtatLieu {
  public reference: string ;
  public dateEtatLieu: Date ;
  public locationDetail: LocationDetail ;
  public description: string;
  public consigne: Array<Consigne>;
  public etatLieuItems: Array<EtatLieuItems>;
}

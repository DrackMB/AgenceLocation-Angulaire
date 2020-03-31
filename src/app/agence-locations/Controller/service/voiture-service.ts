import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Voiture} from '../model/voiture.model';
import {Agence} from '../model/agence.model';
import {Transmition} from '../model/transmition.model';
import {Carburant} from '../model/carburant.model';
import {Categorie} from '../model/categorie.model';
import {Marque} from '../model/marque.model';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  private _voiture: Voiture;
  private _voitureResult: Array<Voiture>;
  private _agence: Agence;
  private _transmition: Transmition;
  private _carburant: Carburant;
  private _categorie: Categorie;


  get categorie(): Categorie {
    if (this._categorie == null) {
      this._categorie = new Categorie();
    }
    return this._categorie;
  }

  set categorie(value: Categorie) {
    this._categorie = value;
  }

  get carburant(): Carburant {
    if (this._carburant == null) {
      this._carburant = new Carburant();
    }
    return this._carburant;
  }

  set carburant(value: Carburant) {
    this._carburant = value;
  }

  get transmition(): Transmition {
    if (this._transmition == null) {
      this._transmition = new Transmition();
    }
    return this._transmition;
  }

  set transmition(value: Transmition) {
    this._transmition = value;
  }

  get agence(): Agence {
    if (this._agence == null) {
      this._agence = new Agence();
    }

    return this._agence;
  }

  set agence(value: Agence) {
    this._agence = value;
  }

  constructor( private http: HttpClient) { }


  public deleteByReference(voiture: Voiture) {
   const index = this.voitureResult.findIndex(v => v.matricule === voiture.matricule);
   if (index !== -1) {
      this.voitureResult.splice(index, 1);
    }
  }

  public deleteByMatricule(voiture: Voiture) {
    this.http.delete<number> ('http://localhost:9090/agencelocation/voiture/voit/matricule/' + voiture.matricule).subscribe(
      data => {
        this.deleteByReference(voiture);
        console.log('parfait' + data);

      }, error => {
        console.log('il ya un probleme');

      }
    );
  }

  public findall() {
    this.http.get<Array<Voiture>>('http://localhost:9090/agencelocation/voiture/').subscribe(
      data => {
        this.voitureResult = data;
        console.log('data existe');
      },
      error => {
        console.log('il ya un probleme quelque part');
      }
    );
  }

 public findByCategorieLibelleAndAgeneNom(categorie: Categorie , agence: Agence) {
    this.http.get<Array<Voiture>>('http://localhost:9090/agencelocation/voiture/Catgagc/libelle/' + categorie.libelle + '/nom/' + agence.nom).subscribe(
      data => {
        this.voitureResult = data;
        console.log('passe bien');
      },
      error => {
        console.log('erreur');
      }
    );
  }

  public findByCategorieLibelleAndAgenecode(categorie: Categorie , agence: Agence) {
    this.http.get<Array<Voiture>>('http://localhost:9090/agencelocation/voiture/libelle/' + categorie.libelle + '/nom/' + agence.code).subscribe(
      data => {
        this.voitureResult = data;
        console.log('passe bien');
      },
      error => {
        console.log('erreur');
      }
    );
  }
  public findByMatricule(voiture: Voiture) {
    this.http.get<Voiture>('http://localhost:9090/agencelocation/voiture/matricule/' + voiture.matricule).subscribe(
      data => {
        this.voiture = data;
      },
      error => {
        console.log('il y a une erreur quelque part');
      }
    );
  }

  public save2() {
    this.http.post<number>('http://localhost:9090/agencelocation/voiture/', this.voiture).subscribe(
      data => {
        if (data > 0) {
          this.agence.voiture.push(this.cloneVoiture(this.voiture));
          this.categorie.voiture.push(this.cloneVoiture(this.voiture));
          this.carburant.voiture.push(this.cloneVoiture(this.voiture));
          this.transmition.voiture.push(this.cloneVoiture(this.voiture));
          console.log('tout est bien');
        }
      }, error => {
        console.log('il existe un erreur quelque part ');
      }
    );
  }


  get voiture(): Voiture {
    if (this._voiture == null) {
      this._voiture = new Voiture();
    }
    return this._voiture;
  }

  set voiture(value: Voiture) {
    this._voiture = value;
  }

  get voitureResult(): Array<Voiture> {
    if (this._voitureResult == null) {
      this._voitureResult = new Array<Voiture>();
    }
    return this._voitureResult;
  }

  set voitureResult(value: Array<Voiture>) {
    this._voitureResult = value;
  }


  private cloneVoiture(voiture: Voiture) {
    const myClon = new Voiture();
    myClon.agence = voiture.agence;
    myClon.carburant = voiture.carburant;
    myClon.categorie = voiture.categorie;
    myClon.transmition = voiture.transmition;
    myClon.dateMiseEnCirculation = voiture.dateMiseEnCirculation;
    myClon.matricule = voiture.matricule;
    myClon.moyenNote = voiture.moyenNote;
    myClon.prixinitial = voiture.prixinitial;
    return myClon;
  }
}


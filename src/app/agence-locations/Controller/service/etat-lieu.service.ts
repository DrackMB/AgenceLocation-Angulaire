import { Injectable } from '@angular/core';
import {EtatLieu} from '../model/etat-lieu.model';
import {HttpClient} from '@angular/common/http';
import {Consigne} from '../model/consigne.model';
import {EtatLieuItems} from '../model/etat-lieu-items.model';




@Injectable({
  providedIn: 'root'
})
export class EtatLieuService {


  private _etatLieu: EtatLieu ;
  private _etatLieus: Array<EtatLieu> ;
  //private  locationDetails: Array<LocationDetail>;
  //private _locationDetail: LocationDetail ;
  private _consigne: Consigne;
  private _consignes: Array<Consigne>;
  private _etatLieuItemsListe: Array<EtatLieuItems>;
  private _etatLieuItems: EtatLieuItems;
  private _etatLieuByReference: EtatLieu;
  private _etatLieusByDateEtatLieu: Array<EtatLieu>;
  private _etatLieusByLocationDetailVoitureMatricule: Array<EtatLieu> ;
  private _etatLieusByLocationDetailDateLocation: Array<EtatLieu>;
  private _etatLieusByLocationDetailDateRetour: Array<EtatLieu>;
  private _etatLieusByLocationDetailprix: Array<EtatLieu>;
  private _etatLieusByLocationDetailClientCin: Array<EtatLieu>;

  private _url = 'http://localhost:9090/agenceLocation/etatLieu/' ;


  constructor(private http: HttpClient) { }

  get etatLieu(): EtatLieu {
    if (this._etatLieu == null) {
      this._etatLieu = new EtatLieu();
    }
    return this._etatLieu;
  }

  set etatLieu(value: EtatLieu) {
    this._etatLieu = value;
  }


  get consigne(): Consigne {
    if (this._consigne == null) {
      this._consigne = new Consigne();
    }
    return this._consigne;
  }

  set consigne(value: Consigne) {
    this._consigne = value;
  }

  get consignes(): Array<Consigne> {
    if (this._consignes == null) {
      this._consignes = new Array<Consigne>();
    }
    return this._consignes;
  }

  set consignes(value: Array<Consigne>) {
    this._consignes = value;
  }

  get etatLieuItemsListe(): Array<EtatLieuItems> {
    if (this._etatLieuItemsListe == null) {
      this._etatLieuItemsListe = new Array<EtatLieuItems>();
    }
    return this._etatLieuItemsListe;
  }

  set etatLieuItemsListe(value: Array<EtatLieuItems>) {
    this._etatLieuItemsListe = value;
  }

  get etatLieuItems(): EtatLieuItems {
    if (this.etatLieuItems == null) {
      this._etatLieuItems = new EtatLieuItems();
    }
    return this._etatLieuItems;
  }

  set etatLieuItems(value: EtatLieuItems) {
    this._etatLieuItems = value;
  }

  get etatLieuByReference(): EtatLieu {
    if (this._etatLieuByReference == null) {
      this._etatLieuByReference = new EtatLieu();
    }
    return this._etatLieuByReference;
  }

  set etatLieuByReference(value: EtatLieu) {
    this._etatLieuByReference = value;
  }

  get etatLieusByLocationDetailprix(): Array<EtatLieu> {
    if (this._etatLieusByLocationDetailprix == null) {
      this._etatLieusByLocationDetailprix = new Array<EtatLieu>();
    }
    return this._etatLieusByLocationDetailprix;
  }

  set etatLieusByLocationDetailprix(value: Array<EtatLieu>) {
    this._etatLieusByLocationDetailprix = value;
  }


  get etatLieus(): Array<EtatLieu> {
    if (this._etatLieus == null) {
      this._etatLieus = new Array<EtatLieu>();
    }
    return this._etatLieus;
  }

  set etatLieus(value: Array<EtatLieu>) {
    this._etatLieus = value;
  }

  get etatLieusByDateEtatLieu(): Array<EtatLieu> {
    if (this._etatLieusByDateEtatLieu == null) {
      this._etatLieusByDateEtatLieu = new Array<EtatLieu>();
    }
    return this._etatLieusByDateEtatLieu;
  }

  set etatLieusByDateEtatLieu(value: Array<EtatLieu>) {
    this._etatLieusByDateEtatLieu = value;
  }

  get etatLieusByLocationDetailVoitureMatricule(): Array<EtatLieu> {
    if (this._etatLieusByLocationDetailVoitureMatricule == null) {
      this._etatLieusByLocationDetailVoitureMatricule = new Array<EtatLieu>();
    }
    return this._etatLieusByLocationDetailVoitureMatricule;
  }

  set etatLieusByLocationDetailVoitureMatricule(value: Array<EtatLieu>) {
    this._etatLieusByLocationDetailVoitureMatricule = value;
  }

  get etatLieusByLocationDetailDateLocation(): Array<EtatLieu> {
    if (this._etatLieusByLocationDetailDateLocation == null) {
      this._etatLieusByLocationDetailDateLocation = new Array<EtatLieu>();
    }
    return this._etatLieusByLocationDetailDateLocation;
  }

  set etatLieusByLocationDetailDateLocation(value: Array<EtatLieu>) {
    this._etatLieusByLocationDetailDateLocation = value;
  }

  get etatLieusByLocationDetailDateRetour(): Array<EtatLieu> {
    if (this._etatLieusByLocationDetailDateRetour == null) {
      this._etatLieusByLocationDetailDateRetour = new Array<EtatLieu>();
    }
    return this._etatLieusByLocationDetailDateRetour;
  }

  set etatLieusByLocationDetailDateRetour(value: Array<EtatLieu>) {
    this._etatLieusByLocationDetailDateRetour = value;
  }

  get etatLieusByLocationDetailClientCin(): Array<EtatLieu> {
    if (this._etatLieusByLocationDetailClientCin == null) {
      this._etatLieus = new Array<EtatLieu>();
    }
    return this._etatLieusByLocationDetailClientCin;
  }

  set etatLieusByLocationDetailClientCin(value: Array<EtatLieu>) {
    this._etatLieusByLocationDetailClientCin = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  public  deleteByReference(etatLieu: EtatLieu) {
    this.http.delete<number>(this._url + 'reference/' + etatLieu.reference).subscribe(
      data => {
        console.log('deleted data ' + data);
        this.deleteByReferenceFromView(etatLieu);
      }, error => {
        console.log('erreur');
      }
    );
  }
  public deleteByReferenceFromView(etatLieu: EtatLieu) {
    const index = this.etatLieus.findIndex(c => c.reference === etatLieu.reference );
    if (index !== -1) {
      this.etatLieus.splice(index, 1);
    }
  }

  private cloneEtatLieu(etatLieu: EtatLieu) {
    const myClone = new EtatLieu();
    myClone.reference = etatLieu.reference;
    myClone.dateEtatLieu = etatLieu.dateEtatLieu;
   // myClone.locationDetail = etatLieu.locationDetail;
    myClone.description = etatLieu.description;
    return myClone;
  }
  public save(etatLieu: EtatLieu) {
    this.http.post<number>( 'http://localhost:9090/agenceLocation/etatLieu/' , this.etatLieu).subscribe(
      data => {
        if (data > 0) {
          this.etatLieus.push(this.cloneEtatLieu(this.etatLieu));
          this.etatLieu = null ;
          //  this.commandeItem = null;
        }
      }, eror => {
        console.log('errueur de save');
      }
    );
  }
  public validateSave(): boolean {
    return this.etatLieu.reference != null ;
  }

  public findAll() {
    this.http.get<Array<EtatLieu>>(this._url).subscribe(
      data => {
        console.log(' all data ' + data);
        this.etatLieus = data;
      }
    );

  }
  public findByReference(etatLieu: EtatLieu) {
    this.http.get<EtatLieu>(this._url + 'reference/' + etatLieu.reference).subscribe(
      data => {
        if (data != null) {
          this.etatLieuByReference = data;
          console.log('data ' + data);
          this.etatLieu = null ;
        }
      }, error => {
        console.log('error');
      }
    );
  }
  public findByDateEtatLieu(etatLieu: EtatLieu) {
    this.http.get<Array<EtatLieu>>(this._url + 'etatLieu/' + etatLieu.dateEtatLieu).subscribe(
      data => {
        if (data != null) {
          this.etatLieusByDateEtatLieu = data ;
          console.log('data ' + data );
          this.etatLieu = null ;
        }
      }, error => {
        console.log('error');
      }
    );
  }
/*1
  public  deleteByLocationDetailVoitureMatricule(locationDetail: LocationDetail) {
    this.http.delete<number>('http://localhost:9090/agenceLocation/etatLieu/matricule/' + locationDetail.matricule).subscribe(
      data => {
        console.log('deleted data ' + data);
        this.deleteByLocationDetailVoitureMatriculeFromView(locationDetail);
      }, error => {
        console.log('erreur');
      }
    );
  }
  public  deleteByLocationDetailVoitureMatriculeFromView(locationDetail: LocationDetail) {
    const index = this.etatLieutsByLocationDetailVoitureMatricule.findIndex(a => a.matricule=== locationDetail.matricule);
    if (index !== -1) {
      this.etatLieusByLocationDetailVoitureMatricule.splice(index, 1 );
    }
  }
  public findByLocationDetailVoitureMatriculelocationDetail: LocationDetail) {
  this.http.get<Array<EtatLieu>>('http://localhost:9090/agenceLocation/etatLieu/'+ 'matricule/' + locationDetail.matricule).subscribe(
    data => {
  if (data != null) {
  this.tatLieutsByLocationDetailVoitureMatricule = data ;
  private _console.log('data ' + data );
  this.etatLieu = null ;
}
}, error => {
  console.log('error');
}
);
}

public findByLocationDetailDateLocation(locationDetail: LocationDetail) {
  this.http.get<Array<EtatLieu>>( 'http://localhost:9090/agenceLocation/etatLieu/location/date/' + locationDetail.dateLocation).subscribe(
    data => {
      if (data != null) {
        this.etatLieusByLocationDetailDateLocation = data ;
        console.log('data ' + data );
        this.etatLieu = null ;
      }
    }, error => {
      console.log('error');
    }
  );
}

public findByLocationDetailDateRetour(locationDetail: LocationDetail) {
  this.http.get<Array<EtatLieu>>('http://localhost:9090/agenceLocation/etatLieu/retour/date/' + locationDetail.dateRetour).subscribe(
    data => {
      if (data != null) {
        this.etatLieusByLocationDetailDateRetour = data ;
        console.log('data ' + data );
        this.etatLieu = null ;
      }
    }, error => {
      console.log('error');
    }
  );
}
public findByLocationDetailLocationPrix(locationDetail: LocationDetail) {
  this.http.get<Array<EtatLieu>>('http://localhost:9090/agenceLocation/etatLieu/prix/' + locationDetail.prix).subscribe(
    data => {
      if (data != null) {
        this.etatLieusByLocationDetailprix = data ;
        console.log('data ' + data );
        this.etatLieu = null ;
      }
    }, error => {
      console.log('error');
    }
  );
}
public findByLocationDetailLocationClientCin(locationDetail: LocationDetail) {
  this.http.get<Array<EtatLieu>>('http://localhost:9090/agenceLocation/etatLieu/cin/' + locationDetail.cin).subscribe(
    data => {
      if (data != null) {
        this.etatLieusByLocationDetailCin = data ;
        console.log('data ' + data );
        this.etatLieu = null ;
      }
    }, error => {
      console.log('error');
    }
  );
}

public  deleteByLocationDetailLocationClientCin(locationDetail: LocationDetail) {
  this.http.delete<number>('http://localhost:9090/agenceLocation/etatLieu/matricule/' + locationDetail.matricule).subscribe(
    data => {
      console.log('deleted data ' + data);
      this.deleteByLocationDetailVoitureMatriculeFromView(locationDetail);
    }, error => {
      console.log('erreur');
    }
  );
}
public  deleteByLocationDetailClientCinFromView(locationDetail: LocationDetail) {
  const index = this.etatLieutsByLocationDetailClientCin.findIndex(a => a.cin=== locationDetail.cin);
  if (index !== -1) {
    this.etatLieusByLocationDetailClientCin.splice(index, 1 );
  }
}
*/

}

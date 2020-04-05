import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {AgenceLocationsComponent} from './agence-locations/agence-locations.component';
import {VoiturePricingComponent} from './agence-locations/voiture-pricing/voiture-pricing.component';
import {CarburantComponent} from './agence-locations/carburant/carburant.component';
import {TransmitionComponent} from './agence-locations/transmition/transmition.component';
import {HttpClientModule} from '@angular/common/http';
import {VoitureComponent} from './agence-locations/voiture/voiture.component';
import {FormsModule} from '@angular/forms';
import { PromoComponent } from './agence-locations/promo/promo.component';
import {AgenceComponent} from './agence-locations/agence/agence.component';
import {CategorieComponent} from './agence-locations/categorie/categorie.component';
import {MarqueComponent} from './agence-locations/marque/marque.component';
import { NoteComponent } from './agence-locations/note/note.component';
import { ClientComponent } from './agence-locations/client/client.component';
import { ReviewComponent } from './agence-locations/review/review.component';
import { PaysComponent } from './agence-locations/pays/pays.component';
import { VilleComponent } from './agence-locations/ville/ville.component';
import { EtatLieuComponent} from './agence-locations/etat-lieu/etat-lieu.component';
import { EtatLieuItemsComponent} from './agence-locations/etat-lieu-items/etat-lieu-items.component';
import { ConsigneComponent } from './agence-locations/consigne/consigne.component';



const appRoutes: Routes = [
  {path: 'Carburant' , component: CarburantComponent},
  {path: 'Transmition' , component: TransmitionComponent},
  {path: 'Agence' , component: AgenceComponent},
  {path: 'categorie' , component: CategorieComponent},
  {path: 'marque' , component: MarqueComponent},
  {path: 'VoiturePrincing' , component: VoiturePricingComponent},
  {path: 'Voiture' , component: VoitureComponent},
  {path: 'Client' , component: ClientComponent},
  {path: 'Note' , component: NoteComponent },
  {path: 'Review' , component: ReviewComponent},
  {path: 'Ville' , component: VilleComponent},
  {path: 'Pays' , component: PaysComponent},
  {path: 'Consigne' , component: ConsigneComponent},
  {path: 'EtatLieu' , component: EtatLieuComponent},
  {path: 'EtatLieuItems' , component: EtatLieuItemsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AgenceLocationsComponent,
    VoiturePricingComponent,
    CarburantComponent,
    TransmitionComponent,
    VoitureComponent,
    PromoComponent,
    AgenceComponent,
    CategorieComponent,
    MarqueComponent,
    NoteComponent,
    ClientComponent,
    ReviewComponent,
    PaysComponent,
    VilleComponent,
    EtatLieuComponent,
    EtatLieuItemsComponent,
    ConsigneComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AgenceLocationsComponent]
})
export class AppModule { }

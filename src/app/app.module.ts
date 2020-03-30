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

const appRoutes: Routes = [
  {path: 'Carburant' , component: CarburantComponent},
  {path: 'Transmition' , component: TransmitionComponent},
  {path: 'VoiturePrincing' , component: VoiturePricingComponent}
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
    MarqueComponent
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

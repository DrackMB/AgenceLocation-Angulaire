import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AgenceLocationsComponent} from './agence-locations/agence-locations.component';
import {VoiturePricingComponent} from './agence-locations/voiture-pricing/voiture-pricing.component';
import {CarburantComponent} from './agence-locations/carburant/carburant.component';
import {TransmitionComponent} from './agence-locations/transmition/transmition.component';
import {HttpClientModule} from '@angular/common/http';
import {VoitureComponent} from './agence-locations/voiture/voiture.component';
import {FormsModule} from '@angular/forms';
import { PromoComponent } from './agence-locations/promo/promo.component';

@NgModule({
  declarations: [
    AppComponent,
    AgenceLocationsComponent,
    VoiturePricingComponent,
    CarburantComponent,
    TransmitionComponent,
    VoitureComponent,
    PromoComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AgenceLocationsComponent]
})
export class AppModule { }

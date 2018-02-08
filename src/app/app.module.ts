import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClaimHistoryComponent } from './claim-history/claim-history.component';

import {AppComponent} from './app.component';
import { HomeComponent } from './home/home.component';
import { FindAProviderComponent } from './find-a-provider/find-a-provider.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PlanSummaryComponent } from './plan-summary/plan-summary.component';
import { ProvidersFoundComponent } from './providers-found/providers-found.component';
import { SettingsComponent } from './settings/settings.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { IdCardsComponent } from './id-cards/id-cards.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ClaimHistoryComponent,
    HomeComponent,
    FindAProviderComponent,
    PaymentInfoComponent,
    PersonalInfoComponent,
    PlanSummaryComponent,
    ProvidersFoundComponent,
    SettingsComponent,
    SideNavComponent,
    IdCardsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { AboutComponent } from './about/about.component';
import { HowtoComponent } from './howto/howto.component';
import { DownloadComponent } from './download/download.component';
import { FaqComponent } from './faq/faq.component';
import { WinnerComponent } from './winner/winner.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent,
    AboutComponent,
    HowtoComponent,
    DownloadComponent,
    FaqComponent,
    WinnerComponent,
    FooterComponent,
    IntroComponent,
    PrivacyPolicyComponent,
    TermsComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IntroComponent } from "./intro/intro.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { TermsComponent } from "./terms/terms.component";
import { ContactComponent } from "./contact/contact.component";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

const routes: Routes = [
  { path: "", component: IntroComponent },
  { path: "about", component: AboutComponent },
  { path: "home", component: HomeComponent },
  { path: "privacy-policy", component: PrivacyPolicyComponent },
  { path: "terms-and-conditions", component: TermsComponent },
  { path: "contact-us", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
})
export class AppRoutingModule {}

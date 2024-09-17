import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component pages
import { StarterComponent } from "./starter/starter.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { FaqsComponent } from "./faqs/faqs.component";
import { PricingComponent } from "./pricing/pricing.component";
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TermConditionsComponent } from './term-conditions/term-conditions.component';
import {UsersComponent} from "./users/users.component";
import {ModelsComponent} from "./models/models.component";
import {OfferComponent} from "./stage/offer/offer.component";
import {OfferStaffComponent} from "./stage/offerStaff/offer-Staff.component";
import {OfferUserComponent} from "./stage/offerUser/offer-User.component";
import {MesofferStaffComponent} from "./stage/mesofferStaff/mesoffer-Staff.component";
import {OfferUserPFEComponent} from "./stage/offerUserPFE/offer-UserPFE.component";
import {OfferUserJOBComponent} from "./stage/offerUserJOB/offer-UserJOB.component";
import {MesofferAdminComponent} from "./stage/mesofferAdmin/mesoffer-Admin.component";
import {OfferAdminComponent} from "./stage/offerAdmin/offer-Admin.component";
import {ApplicationComponent} from "./stage/application/application.component";


const routes: Routes = [

  {
    path: 'starter',
    component: StarterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'profile-settings',
    component: ProfileSettingsComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'faqs',
    component: FaqsComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'term-conditions',
    component: TermConditionsComponent
  },
  {
    path: 'users',
   component: UsersComponent

  },
  {
    path: 'models',
    component: ModelsComponent

  },
  {
    path: 'offer',
    component: OfferComponent

  },
  {
    path: 'offerStaff',
    component: OfferStaffComponent

  },
  {
    path: 'offerUser',
    component: OfferUserComponent

  },
  {
    path: 'offerUserPFE',
    component: OfferUserPFEComponent

  },
  {
    path: 'offerUserJOB',
    component: OfferUserJOBComponent

  },
  {
    path: 'mesofferStaff',
    component:  MesofferStaffComponent

  },
  {
    path: 'mesofferAdmin',
    component:  MesofferAdminComponent

  },
  {
    path: 'offerAdmin',
    component:  OfferAdminComponent
  },
  {
    path: 'applications',
    component:  ApplicationComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraPagesRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './welcome.component';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PagenotfoundComponent } from '../pagenotfound.component';


@NgModule({
  declarations: [
    WelcomeComponent,
    PrivacyPolicyComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

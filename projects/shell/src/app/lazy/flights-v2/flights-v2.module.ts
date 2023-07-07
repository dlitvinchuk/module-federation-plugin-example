import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlightsV2Component } from './flights-v2.component';
import { FlightsV2RoutingModule } from './flights-v2-routing.module';

import { AdHostDirectiveModule } from '../../directives/ad-host/ad-host.module';

@NgModule({
  imports: [CommonModule, AdHostDirectiveModule, FlightsV2RoutingModule],
  declarations: [FlightsV2Component],
})
export class FlightsV2Module {}

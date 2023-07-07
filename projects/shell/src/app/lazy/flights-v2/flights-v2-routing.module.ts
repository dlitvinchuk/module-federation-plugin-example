import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlightsV2Component } from './flights-v2.component';

const routes: Routes = [
  {
    path: '',
    component: FlightsV2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightsV2RoutingModule {}

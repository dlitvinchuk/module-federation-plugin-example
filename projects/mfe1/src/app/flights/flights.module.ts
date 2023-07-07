import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import {
  DxListModule,
  DxSelectBoxModule,
  DxToolbarModule,
} from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES),
    DxListModule,
    DxToolbarModule,
    DxSelectBoxModule,
  ],
  declarations: [FlightsSearchComponent],
  exports: [FlightsSearchComponent],
})
export class FlightsModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Ng13AppComponent } from './ng-13-app.component';
import { Ng13AppRoutingModule } from './ng-13-app-routing.module';

import { AdHostDirectiveModule } from '../../directives/ad-host/ad-host.module';

@NgModule({
  imports: [CommonModule, AdHostDirectiveModule, Ng13AppRoutingModule],
  declarations: [Ng13AppComponent],
})
export class Ng13AppModule {}

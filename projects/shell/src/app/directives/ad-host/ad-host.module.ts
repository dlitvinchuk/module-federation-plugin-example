import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdDirective } from './ad-host.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [AdDirective],
  exports: [AdDirective],
})
export class AdHostDirectiveModule {}

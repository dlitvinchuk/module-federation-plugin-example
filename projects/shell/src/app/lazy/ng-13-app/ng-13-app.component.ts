import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild } from '@angular/core';

import { AdDirective } from '../../directives/ad-host/ad-host.directive';

@Component({
  selector: 'app-ng-13-app',
  template: `<ng-template adHost></ng-template>`,
})
export class Ng13AppComponent implements OnInit {
  @ViewChild(AdDirective, { static: true })
  adHost: AdDirective;

  async ngOnInit(): Promise<void> {
    const m = await loadRemoteModule({
      type: 'manifest',
      remoteName: 'mfe2',
      exposedModule: './Component',
    });

    this.adHost.viewContainerRef.createComponent(m.AppComponent);
  }
}

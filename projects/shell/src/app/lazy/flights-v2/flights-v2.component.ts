import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { AdDirective } from '../../directives/ad-host/ad-host.directive';

@Component({
  selector: 'app-flights-v2',
  template: `
    <div id="flights-v2-container">
      <button (click)="onLoadClick()">Load remote Component</button>

      <div id="flights-v2-content" style="margin-top: 20px;">
        <ng-template adHost></ng-template>
      </div>
    </div>
  `,
})
export class FlightsV2Component implements OnInit {
  @ViewChild(AdDirective, { static: true })
  adHost: AdDirective;

  constructor(private readonly viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    console.log(this.viewContainerRef);
  }

  async onLoadClick(): Promise<void> {
    const m = await loadRemoteModule({
      type: 'manifest',
      remoteName: 'mfe1',
      exposedModule: './Component',
    });

    this.adHost.viewContainerRef.createComponent(m.FlightsSearchComponent);
  }
}

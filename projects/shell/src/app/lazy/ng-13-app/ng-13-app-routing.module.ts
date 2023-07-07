import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ng13AppComponent } from './ng-13-app.component';

const routes: Routes = [
  {
    path: '',
    component: Ng13AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ng13AppRoutingModule {}

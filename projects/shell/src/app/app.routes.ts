import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },

  // Your route here:

  {
    path: 'flights',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe1',
        exposedModule: './Module',
      }).then((m) => m.FlightsModule),
  },
  {
    path: 'flights-v2',
    loadChildren: () =>
      import('./lazy/flights-v2/flights-v2.module').then(
        (m) => m.FlightsV2Module
      ),
  },
  {
    path: 'ng-13-app',
    loadChildren: () =>
      import('./lazy/ng-13-app/ng-13-app.module').then((m) => m.Ng13AppModule),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.
];

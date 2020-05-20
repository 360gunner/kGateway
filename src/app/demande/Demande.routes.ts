import { Routes } from '@angular/router';
import { DemandeListComponent } from './Demande-list/Demande-list.component';
import { DemandeEditComponent } from './Demande-edit/Demande-edit.component';

export const DEMANDE_ROUTES: Routes = [
  {
    path: 'maintenance/Demande',
    component: DemandeListComponent
  },
  {
    path: 'maintenance/Demande/:id',
    component: DemandeEditComponent
  }
];

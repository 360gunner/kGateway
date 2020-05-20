import { Routes } from '@angular/router';
import { DemandeListComponent } from './Demande-list/Demande-list.component';
import { DemandeEditComponent } from './Demande-edit/Demande-edit.component';
import { DemandeNewComponent } from './demande-new/demande-new.component';
import { MaintenanceComponent } from './maintenance/maintenance.component' 
export const DEMANDE_ROUTES: Routes = [
  {
    path: 'maintenance/Demande',
    component: DemandeListComponent
  },
  {
    path: 'maintenance/newDemande',
    component: DemandeNewComponent
  },
  {
    path: 'maintenance/Demande/:id',
    component: DemandeEditComponent
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent
  }
];

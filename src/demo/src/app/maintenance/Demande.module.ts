import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DemandeListComponent } from './Demande-list/Demande-list.component';
import { DemandeEditComponent } from './Demande-edit/Demande-edit.component';
import { DemandeService } from './Demande.service';
import { DEMANDE_ROUTES } from './Demande.routes';
import { DemandeNewComponent } from './demande-new/demande-new.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(DEMANDE_ROUTES)
  ],
  declarations: [
    DemandeListComponent,
    DemandeEditComponent,
    DemandeNewComponent,
    MaintenanceComponent
  ],
  providers: [DemandeService],
  exports: []
})
export class DemandeMaintenanceModule { }

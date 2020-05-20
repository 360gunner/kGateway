import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DemandeListComponent } from './Demande-list/Demande-list.component';
import { DemandeEditComponent } from './Demande-edit/Demande-edit.component';
import { DemandeService } from './Demande.service';
import { DEMANDE_ROUTES } from './Demande.routes';
import { StockComponent } from './stock/stock.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(DEMANDE_ROUTES)
  ],
  declarations: [
    DemandeListComponent,
    DemandeEditComponent,
    StockComponent
  ],
  providers: [DemandeService],
  exports: []
})
export class DemandeStockModule { }

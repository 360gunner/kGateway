import { Routes } from '@angular/router';
import { DemandeListComponent } from './Demande-list/Demande-list.component';
import { DemandeEditComponent } from './Demande-edit/Demande-edit.component';
import { StockComponent } from './stock/stock.component' 

export const DEMANDE_ROUTES: Routes = [
  {
    path: 'stock/Demande',
    component: DemandeListComponent
  },
  {
    path: 'stock/Demande/:id',
    component: DemandeEditComponent
  },
  {
    path: 'stock',
    component: StockComponent
  }
];

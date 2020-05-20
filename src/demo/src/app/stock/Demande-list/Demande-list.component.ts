import { Component, OnInit } from '@angular/core';
import { DemandeFilter } from '../Demande-filter';
import { DemandeService } from '../Demande.service';
import { Demande } from '../Demande';

@Component({
  selector: 'app-Demande',
  templateUrl: 'Demande-list.component.html'
})
export class DemandeListComponent implements OnInit {

  filter = new DemandeFilter();
  selectedDemande: Demande;
  feedback: any = {};

  get DemandeList(): Demande[] {
    return this.DemandeService.DemandeList;
  }

  constructor(private DemandeService: DemandeService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.DemandeService.load(this.filter);
  }

  select(selected: Demande): void {
    this.selectedDemande = selected;
  }

  delete(Demande: Demande): void {
    if (confirm('Are you sure?')) {
      this.DemandeService.delete(Demande).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DemandeService } from '../Demande.service';
import { Demande } from '../Demande';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-Demande-edit',
  templateUrl: './Demande-edit.component.html'
})
export class DemandeEditComponent implements OnInit {

  id: string;
  Demande: Demande;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private DemandeService: DemandeService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Demande()); }
          return this.DemandeService.findById(id);
        })
      )
      .subscribe(Demande => {
          this.Demande = Demande;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.DemandeService.save(this.Demande).subscribe(
      Demande => {
        this.Demande = Demande;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/maintenance/Demande']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/maintenance/Demande']);
  }
}

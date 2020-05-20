import { Demande } from './Demande';
import { DemandeFilter } from './Demande-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class DemandeService {
  DemandeList: Demande[] = [];

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Demande> {
    const url = `/stock/Demande/${id}`;
    const params = { 'id': id };
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Demande>(url, {params, headers});
  }

  load(filter: DemandeFilter): void {
    this.find(filter).subscribe(result => {
        this.DemandeList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: DemandeFilter): Observable<Demande[]> {
    const url = `/stock/Demande`;
    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = {
     
    };

    return this.http.get<Demande[]>(url, {params, headers});
  }

  save(entity: Demande): Observable<Demande> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity.id) {
      url = `/stock/Demande/`; //${entity.id.toString()} yndar mor Demande
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Demande>(url, entity, {headers, params});
    } else {
      url = `/stock/Demande`;
      return this.http.post<Demande>(url, entity, {headers, params});
    }
  }

  delete(entity: Demande): Observable<Demande> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity.id) {
      url = `/stock/Demande/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Demande>(url, {headers, params});
    }
    return null;
  }
}


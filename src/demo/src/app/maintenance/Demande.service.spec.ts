import { TestBed } from '@angular/core/testing';
import { DemandeService } from './Demande.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DemandeService', () => {
  let service: DemandeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DemandeService]
    });

    service = TestBed.get(DemandeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

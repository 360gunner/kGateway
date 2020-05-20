import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DemandeListComponent } from './Demande-list.component';
import { DemandeService } from '../Demande.service';

describe('DemandeListComponent', () => {
  let component: DemandeListComponent;
  let fixture: ComponentFixture<DemandeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemandeListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [DemandeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

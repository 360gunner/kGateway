import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DemandeEditComponent } from './Demande-edit.component';
import { DemandeService } from '../Demande.service';

describe('DemandeEditComponent', () => {
  let component: DemandeEditComponent;
  let fixture: ComponentFixture<DemandeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemandeEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [DemandeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

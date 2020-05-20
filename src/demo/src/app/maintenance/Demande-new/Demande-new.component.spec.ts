import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeNewComponent } from './demande-new.component';

describe('DemandeNewComponent', () => {
  let component: DemandeNewComponent;
  let fixture: ComponentFixture<DemandeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

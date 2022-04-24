import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionEncuestaComponent } from './opcion-encuesta.component';

describe('OpcionEncuestaComponent', () => {
  let component: OpcionEncuestaComponent;
  let fixture: ComponentFixture<OpcionEncuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionEncuestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

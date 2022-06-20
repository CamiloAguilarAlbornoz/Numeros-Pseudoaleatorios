import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaKolmogorovSmirnovComponent } from './prueba-kolmogorov-smirnov.component';

describe('PruebaKolmogorovSmirnovComponent', () => {
  let component: PruebaKolmogorovSmirnovComponent;
  let fixture: ComponentFixture<PruebaKolmogorovSmirnovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaKolmogorovSmirnovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaKolmogorovSmirnovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

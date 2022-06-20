import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongruencialMultiplicativoComponent } from './congruencial-multiplicativo.component';

describe('CongruencialMultiplicativoComponent', () => {
  let component: CongruencialMultiplicativoComponent;
  let fixture: ComponentFixture<CongruencialMultiplicativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongruencialMultiplicativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongruencialMultiplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

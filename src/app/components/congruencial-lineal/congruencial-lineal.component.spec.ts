import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongruencialLinealComponent } from './congruencial-lineal.component';

describe('CongruencialLinealComponent', () => {
  let component: CongruencialLinealComponent;
  let fixture: ComponentFixture<CongruencialLinealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongruencialLinealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongruencialLinealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

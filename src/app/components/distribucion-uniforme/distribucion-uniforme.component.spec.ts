import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucionUniformeComponent } from './distribucion-uniforme.component';

describe('DistribucionUniformeComponent', () => {
  let component: DistribucionUniformeComponent;
  let fixture: ComponentFixture<DistribucionUniformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistribucionUniformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribucionUniformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

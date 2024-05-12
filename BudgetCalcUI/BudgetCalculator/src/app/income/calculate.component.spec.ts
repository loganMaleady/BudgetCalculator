import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateComponent } from './income.component';

describe('CalculateComponent', () => {
  let component: CalculateComponent;
  let fixture: ComponentFixture<CalculateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculateComponent]
    });
    fixture = TestBed.createComponent(CalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

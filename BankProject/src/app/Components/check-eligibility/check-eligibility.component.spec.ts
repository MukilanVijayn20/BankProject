import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEligibilityComponent } from './check-eligibility.component';

describe('CheckEligibilityComponent', () => {
  let component: CheckEligibilityComponent;
  let fixture: ComponentFixture<CheckEligibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckEligibilityComponent]
    });
    fixture = TestBed.createComponent(CheckEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

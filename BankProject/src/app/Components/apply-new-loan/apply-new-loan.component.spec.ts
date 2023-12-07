import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyNewLoanComponent } from './apply-new-loan.component';

describe('ApplyNewLoanComponent', () => {
  let component: ApplyNewLoanComponent;
  let fixture: ComponentFixture<ApplyNewLoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyNewLoanComponent]
    });
    fixture = TestBed.createComponent(ApplyNewLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

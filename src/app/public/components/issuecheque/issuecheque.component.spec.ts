import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuechequeComponent } from './issuecheque.component';

describe('IssuechequeComponent', () => {
  let component: IssuechequeComponent;
  let fixture: ComponentFixture<IssuechequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuechequeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuechequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

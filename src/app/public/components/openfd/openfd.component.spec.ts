import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenfdComponent } from './openfd.component';

describe('OpenfdComponent', () => {
  let component: OpenfdComponent;
  let fixture: ComponentFixture<OpenfdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenfdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AtmPinServiceService } from './atm-pin-service.service';

describe('AtmPinServiceService', () => {
  let service: AtmPinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtmPinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

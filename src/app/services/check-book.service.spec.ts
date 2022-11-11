import { TestBed } from '@angular/core/testing';

import { CheckBookService } from './check-book.service';

describe('CheckBookService', () => {
  let service: CheckBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

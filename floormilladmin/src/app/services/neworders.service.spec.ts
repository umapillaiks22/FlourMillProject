import { TestBed } from '@angular/core/testing';

import { NewordersService } from './neworders.service';

describe('NewordersService', () => {
  let service: NewordersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewordersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

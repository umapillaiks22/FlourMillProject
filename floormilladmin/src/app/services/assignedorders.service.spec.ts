import { TestBed } from '@angular/core/testing';

import { AssignedordersService } from './assignedorders.service';

describe('AssignedordersService', () => {
  let service: AssignedordersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignedordersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

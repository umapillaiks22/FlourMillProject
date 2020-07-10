import { TestBed } from '@angular/core/testing';

import { StaffdetailsService } from './staffdetails.service';

describe('StaffdetailsService', () => {
  let service: StaffdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AdminhomeService } from './adminhome.service';

describe('AdminhomeService', () => {
  let service: AdminhomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminhomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

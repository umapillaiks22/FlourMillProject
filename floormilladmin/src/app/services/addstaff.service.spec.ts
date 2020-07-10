import { TestBed } from '@angular/core/testing';

import { AddstaffService } from './addstaff.service';

describe('AddstaffService', () => {
  let service: AddstaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddstaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

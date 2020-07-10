import { TestBed } from '@angular/core/testing';
//this is where one can sort the set from firebase

import { PendingordersService } from './pendingorders.service';

describe('PendingordersService', () => {
  let service: PendingordersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingordersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
}); 


//this is a code for sorting the elements that can come accross
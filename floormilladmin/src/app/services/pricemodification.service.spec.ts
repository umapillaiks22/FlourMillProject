import { TestBed } from '@angular/core/testing';

import { PricemodificationService } from './pricemodification.service';

describe('PricemodificationService', () => {
  let service: PricemodificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricemodificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

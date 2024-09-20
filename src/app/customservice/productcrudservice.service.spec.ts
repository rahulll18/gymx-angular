import { TestBed } from '@angular/core/testing';

import { ProductcrudserviceService } from './productcrudservice.service';

describe('ProductcrudserviceService', () => {
  let service: ProductcrudserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductcrudserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

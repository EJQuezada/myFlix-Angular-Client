import { TestBed } from '@angular/core/testing';

import { FectchApiDataService } from './fectch-api-data.service';

describe('FectchApiDataService', () => {
  let service: FectchApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FectchApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

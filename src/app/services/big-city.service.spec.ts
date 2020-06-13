import { TestBed } from '@angular/core/testing';

import { BigCityService } from './big-city.service';

describe('BigCityService', () => {
  let service: BigCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BigCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

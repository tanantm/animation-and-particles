import { TestBed } from '@angular/core/testing';

import { GetjsonService } from './get-json.service';

describe('GetjsonService', () => {
  let service: GetjsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetjsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

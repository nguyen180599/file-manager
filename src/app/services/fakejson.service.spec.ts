import { TestBed } from '@angular/core/testing';

import { FakejsonService } from './fakejson.service';

describe('FakejsonService', () => {
  let service: FakejsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakejsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

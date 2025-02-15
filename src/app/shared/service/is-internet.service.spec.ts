import { TestBed } from '@angular/core/testing';

import { IsInternetService } from './is-internet.service';

describe('IsInternetService', () => {
  let service: IsInternetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsInternetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

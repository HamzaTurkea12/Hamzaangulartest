import { TestBed } from '@angular/core/testing';

import { RestcardService } from './restcard.service';

describe('RestcardService', () => {
  let service: RestcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

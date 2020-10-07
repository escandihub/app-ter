import { TestBed } from '@angular/core/testing';

import { TerneroService } from './ternero.service';

describe('TerneroService', () => {
  let service: TerneroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerneroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

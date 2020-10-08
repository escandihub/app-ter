import { TestBed } from '@angular/core/testing';

import { MadreService } from './madre.service';

describe('MadreService', () => {
  let service: MadreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MadreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

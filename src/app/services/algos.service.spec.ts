import { TestBed } from '@angular/core/testing';

import { AlgosService } from './algos.service';

describe('AlgosService', () => {
  let service: AlgosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

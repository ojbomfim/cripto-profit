import { TestBed } from '@angular/core/testing';

import { ChartsResquestService } from './charts-resquest.service';

describe('ChartsResquestService', () => {
  let service: ChartsResquestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartsResquestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

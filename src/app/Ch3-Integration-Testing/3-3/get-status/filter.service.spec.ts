import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';

describe('FilterService', () => {
  let service: FilterService;
  const mockList = [
    { id: 1, status: 'active' },
    { id: 2, status: 'inactive' },
    { id: 3, status: 'pending' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterService]
    });
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

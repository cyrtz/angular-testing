import { TestBed } from '@angular/core/testing';

import { GetStatusByIdService } from './get-status-by-id.service';
import { FilterService } from './filter.service';

describe('GetStatusByIdService', () => {
  let service: GetStatusByIdService;
  let filterService: FilterService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetStatusByIdService);
    filterService = TestBed.inject(FilterService);
  });

  const mockList = [
    { id: 1, status: 'active' },
    { id: 2, status: 'inactive' },
    { id: 3, status: 'pending' },
  ]

  it('should return active status when get element id 1', () => {
    spyOn(filterService, 'filterList').and.callFake((list, id) => mockList.find(item => item.id === id));

    const id = 1;
    const result = service.getStatusById(mockList, id);

    expect(result).toBe('active');
  });

  it('should return inactive status when get element id 2', () => {
    spyOn(filterService, 'filterList').and.callFake((list, id) => mockList.find(item => item.id === id));

    const id = 2;
    const result = service.getStatusById(mockList, id);

    expect(result).toBe('inactive');
    expect(filterService.filterList).toHaveBeenCalledTimes(1);
  });

});

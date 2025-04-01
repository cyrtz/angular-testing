import { FilterService } from './filter.service';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetStatusByIdService {

  constructor() { }

  filterService = inject(FilterService);

  getStatusById(list: { id: number, status: string }[], id: number) {
    const item = this.filterService.filterList(list, id);
    return item?.status;
  }
}

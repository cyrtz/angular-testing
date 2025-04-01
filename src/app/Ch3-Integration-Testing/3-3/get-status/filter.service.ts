import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filterList(list: {id :number, status: string}[], id: number) {
    return list.find(item => item.id === id);
  }
}

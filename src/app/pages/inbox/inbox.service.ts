import { Injectable } from '@angular/core';
import { Collect } from 'src/app/model/collect.model';

@Injectable({
  providedIn: 'root'
})
export class InboxService {
  constructor() {}

  getCollects(): Collect[] {
    return [];
  }
}

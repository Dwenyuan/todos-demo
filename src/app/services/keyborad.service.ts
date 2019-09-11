import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyboradService {
  constructor() {}

  events: KeyboardEvent[] = [];

  emit(e: KeyboardEvent) {
    this.events.push(e);
  }
}

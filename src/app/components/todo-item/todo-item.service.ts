import { Injectable } from '@angular/core';
import { KeyboradService } from 'src/app/services/keyborad.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {
  constructor(private keyboraService: KeyboradService) {}

  getEvents(): Observable<KeyboardEvent[]> {
    return of([]);
  }
}

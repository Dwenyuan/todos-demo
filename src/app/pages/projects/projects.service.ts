import { Injectable } from '@angular/core';
import { Collect } from 'src/app/model/collect.model';
import { mockCollects } from 'src/mock/mock';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor() {}

  getCollects(): Collect[] {
    // TODO: 需要替换测试数据
    return mockCollects;
  }
}

import { mock } from 'mockjs';
import { Collect } from 'src/app/model/collect.model';
export const mockTags = mock({
  'list|4-12': [
    {
      title: '@cword(3,7)'
    }
  ]
}).list;

function template(maxLevel: number, currentLevel: number = 1) {
  return currentLevel > maxLevel
    ? []
    : [
        {
          title: '@cword(2,6) ' + currentLevel,
          start: '@date(2019-09-dd HH:mm:ss)',
          deadline: '@date(2019-09-dd HH:mm:ss)',
          tags: mockTags,
          'children|2': template(maxLevel, currentLevel + 1)
        }
      ];
}
export const mockTodos = mock({
  'children|2': template(3)
}).children;
export const mockCollects = mock({
  'list|2': [
    {
      title: '@cword(3,6)项目',
      icon: 'airplane',
      todos: mockTodos
    }
  ]
}).list.map(v => new Collect(v));

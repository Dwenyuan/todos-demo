import { mock } from 'mockjs';
export const mockTags = mock({
  'list|4-12': [
    {
      title: '@cword(3,7)'
    }
  ]
}).list;
export const mockTodos = mock({
  'children|0-10': [
    {
      title: '@cword(2,6)',
      start: '@date(2019-09-dd HH:mm:ss)',
      deadline: '@date(2019-09-dd HH:mm:ss)',
      tags: mockTags,
      children: '@children'
    }
  ]
}).children;
export const mockCollects = mock({
  'list|5-10': [
    {
      title: '@cword(3,6)项目',
      icon: 'airplane',
      todos: mockTodos
    }
  ]
}).list;

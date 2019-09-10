import { Todo } from './todo.model';

/**
 * 清单列表集合或者叫'项目'
 *
 * @author liushao <liushao121@hotmail.com>
 * @since 0.0.1
 * @export
 * @class Collect
 */
export class Collect {
  constructor({
    title,
    icon,
    todos = []
  }: {
    title: string;
    icon: string;
    todos: Todo[];
  }) {
    this.title = title;
    this.icon = icon;
    this.todos = todos.map(todo => Todo.create(todo));
  }
  title: string;
  icon: string;
  todos: Todo[];
}

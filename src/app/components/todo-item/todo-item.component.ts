import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';
import { FormBuilder, Validators } from '@angular/forms';
import { KeyboradService } from 'src/app/services/keyborad.service';
import { TodoItemService } from './todo-item.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  constructor(
    private keyboraService: KeyboradService,
    private todoItemService: TodoItemService
  ) {}
  @Input() todo: Todo;

  /**
   * 是否处于选中状态
   *
   * @type {boolean}
   * @memberof TodoItemComponent
   */
  selected: boolean;

  /**
   * 任务树是否展开
   *
   * @type {boolean}
   * @memberof TodoItemComponent
   */
  expanded: boolean;

  /**
   * 组件有两种模式
   * 1. 编辑模式，该模式下组件不能拖动
   * 2. 查看模式，该模式下组件可以拖动，可以方便设置为其他item的子item
   * @type {('edit' | 'view')}
   * @memberof TodoItemComponent
   */
  mode: 'edit' | 'view' = 'edit';

  ngOnInit() {
    this.todoItemService.getEvents().subscribe(e => console.log(e));
  }
  triggle(e: KeyboardEvent) {
    e.stopPropagation();
    e.preventDefault();
    this.expanded = !this.expanded;
  }
  select() {
    this.selected = true;
  }
}

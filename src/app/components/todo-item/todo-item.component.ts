import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  expand: boolean;

  /**
   * 组件有两种模式
   * 1. 编辑模式，该模式下组件不能拖动
   * 2. 查看模式，该模式下组件可以拖动，可以方便设置为其他item的子item
   * @type {('edit' | 'view')}
   * @memberof TodoItemComponent
   */
  mode: 'edit' | 'view' = 'edit';
  constructor() {}

  ngOnInit() {}
  triggle() {
    this.expand = !this.expand;
  }
  @HostListener('keyup')
  onkeyup(event: KeyboardEvent) {
    console.log(event);
  }
}

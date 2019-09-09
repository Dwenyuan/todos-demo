import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  expand: boolean;
  constructor() {}

  triggle() {
    this.expand = !this.expand;
  }
  ngOnInit() {}
}

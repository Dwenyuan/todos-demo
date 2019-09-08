import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TodoItemModule } from '../todo-item/todo-item.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TodoItemModule,
    RouterModule.forChild([{ path: ':index', component: TodoListComponent }])
  ],
  declarations: [TodoListComponent],
  exports: [TodoListComponent]
})
export class TodoListModule implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TodoItemComponent } from './todo-item.component';

@NgModule({
  declarations: [TodoItemComponent],
  imports: [CommonModule, IonicModule],
  exports: [TodoItemComponent]
})
export class TodoItemModule {}

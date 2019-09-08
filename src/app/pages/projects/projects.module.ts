import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProjectsPage } from './projects.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPage,
    children: [
      {
        path: 'list',
        loadChildren:
          '../../components/todo-list/todo-list.module#TodoListModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectsPage]
})
export class ProjectsPageModule {}

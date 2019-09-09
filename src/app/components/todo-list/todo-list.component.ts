import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Todo } from 'src/app/model/todo.model';
import { Collect } from 'src/app/model/collect.model';
import { ProjectsService } from 'src/app/pages/projects/projects.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}
  index: string;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => (this.index = params.get('index')));
  }
  get collect(): Collect {
    return this.projectsService.getCollects()[this.index];
  }
}

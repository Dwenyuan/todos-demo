import { Component, OnInit, ViewChild } from '@angular/core';
import { Collect } from 'src/app/model/collect.model';
import { ProjectsService } from './projects.service';
import { IonNav } from '@ionic/angular';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss']
})
export class ProjectsPage implements OnInit {
  constructor(private projectsService: ProjectsService) {}
  collects: Collect[] = [];
  @ViewChild(IonNav, { static: true }) ionNav: IonNav;
  ngOnInit() {
    this.collects = this.projectsService.getCollects();
  }
}

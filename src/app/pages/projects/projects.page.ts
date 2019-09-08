import { Component, OnInit } from '@angular/core';
import { Collect } from 'src/app/model/collect.model';
import { ProjectsService } from './projects.service';
import { NavController } from '@ionic/angular';
import { TodoListComponent } from 'src/app/components/todo-list/todo-list.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss']
})
export class ProjectsPage implements OnInit {
  constructor(
    private projectsService: ProjectsService,
    private navCtrl: NavController
  ) {}
  collects: Collect[] = [];
  ngOnInit() {
    this.collects = this.projectsService.getCollects();
  }
}

import { Component, OnInit } from '@angular/core';

import { ProjectService } from './../../services/project.service';
import { Project } from '../../model/project';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  projects: any[] = [];

  constructor(public projectService: ProjectService,) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    // this.projects.push(this.projectService.getProjects());
    this.projects! = this.projectService.getProjects();
    console.log('projectsss' + this.projects);
  }

}

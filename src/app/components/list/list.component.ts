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
    this.projects! = this.projectService.getProjects();
  }

  saveProject(projectName: string, description: string, manager: string, assignedTo: string, projectStatus: string, creationDate: string){
      const newProject: Project = {
        projectName: projectName,
        description: description,
        manager: manager,
        assignedTo: assignedTo,
        projectStatus: projectStatus,
        creationDate: creationDate
		}
		localStorage.setItem('editProject', JSON.stringify(newProject));
	}

  deleteProject(projectName: string){
    this.projectService.projectDelete(projectName);
    this.getProjects();
  }

}

import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { ProjectService } from './../../services/project.service';
import { Project } from '../../model/project';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @ViewChild('delete',{static: true}) delete!: ElementRef;
  projects: any[] = [];
  public modalReference: any = null;
  public del: any;

  constructor(public projectService: ProjectService, private modalService: NgbModal) {}

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

  public openModal(){
    this.modalReference = this.modalService.open(this.delete);
  }

  public closeModal(){
  	this.modalReference.close();
  }

}

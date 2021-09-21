import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from './../../services/project.service';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	public form!: FormGroup;

	editProject: Project;
	errorMessage: string;
	error: boolean;
	success: boolean;
	selectedManager = 'Select a person';
	selectedAssigned = 'Select a person';
	selectedStatus = 'Enabled';
	managers = ['Walt Cosani', 'Federico Henseler'];
	employees = ['Jane Doe', 'John Doe'];


  	constructor(public formBuilder: FormBuilder, public projectService: ProjectService, private router: Router) {
		this.editProject = this.projectService.getProject(); 
  		this.resetForm();
  		this.errorMessage = '';
  		this.error = false;
  		this.success = false;
  	}

	ngOnInit() {
	}


	public resetForm(){
		this.form = this.formBuilder.group({
		  projectName: [this.editProject.projectName, [Validators.required]],
          description: [this.editProject.description, [Validators.required]],
          manager: [this.editProject.manager],
          assignedTo: [this.editProject.assignedTo],
		  projectStatus: [this.editProject.projectStatus],
		  creationDate: [this.editProject.creationDate]
  		});
	}

	public delay(ms: number) {
		return new Promise( resolve => setTimeout(resolve, ms) );
	}

	public tryEdit(){
		this.projectService.projectDelete(this.editProject.projectName);
		if (this.form.valid) {
			const projectName: string = this.form.get('projectName')!.value;
			const description: string = this.form.get('description')!.value;
			const manager: string = this.form.get('manager')!.value;
			const assignedTo: string = this.form.get('assignedTo')!.value;
			const projectStatus: string = this.form.get('projectStatus')!.value;
			const creationDate: string = this.form.get('creationDate')!.value;
			this.projectService.projectRegister(projectName, description, manager, assignedTo, projectStatus, creationDate);
			this.success = true;
		}
	}	

}

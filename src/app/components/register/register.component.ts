import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from './../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	public form!: FormGroup;

	errorMessage: string;
	error: boolean;
	success: boolean;
	selectedManager = 'Select a person';
	selectedAssigned = 'Select a person';
	selectedStatus = 'Enabled';
	managers = ['Walt Cosani', 'Federico Henseler'];
	employees = ['Jane Doe', 'John Doe'];
	alert = false;
	alert2 = false;
	// public testProject: Object = {
	// 	projectName: 'Landing Page',
	// 	description: 'Test Project',
	// 	manager: 'Walt Cosani',
	// 	assignedTo: 'Ignacio Truffa',
	// 	projectStatus: 'Enabled'
	// };
	// projects = [];


  	constructor(public formBuilder: FormBuilder, public projectService: ProjectService, private router: Router) {
  		this.resetForm();
  		this.errorMessage = '';
  		this.error = false;
  		this.success = false;
  	}

	ngOnInit() {
	}


	public resetForm(){
		this.form = this.formBuilder.group({
		  projectName: ['', [Validators.required]],
          description: ['', [Validators.required]],
          manager: [''],
          assignedTo: [''],
		  projectStatus: [''],
  		});
	}

	public tryRegister(){

		if (this.form.valid) {
			const projectName: string = this.form.get('projectName')!.value;
			const description: string = this.form.get('description')!.value;
			const manager: string = this.form.get('manager')!.value;
			const assignedTo: string = this.form.get('assignedTo')!.value;
			const projectStatus: string = this.form.get('projectStatus')!.value;
			this.projectService.projectRegister(projectName, description, manager, assignedTo, projectStatus);
			this.alert = true;
		}
	}	

	public tryEdit(){

	}	
}

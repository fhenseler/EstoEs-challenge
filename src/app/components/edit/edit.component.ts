import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectService } from './../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	public form!: FormGroup;

	errorMessage: string;
	error: boolean;
	success: boolean;
	selectedManager = 'Select a person';
	selectedAssigned = 'Select a person';
	selectedStatus = 'Enabled';
	managers = ['Walt Cosani', 'Federico Henseler'];
	employees = ['Jane Doe', 'John Doe'];
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

	public tryEdit(){

	}	

}

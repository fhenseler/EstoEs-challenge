import { Injectable } from '@angular/core';
import { Project } from '../model/project';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	constructor() { }

	public projectRegister(projectName: string, description: string, manager: string, assignedTo: string, projectStatus: string, creationDate: string) {
		const newProject: Project = {
			projectName: projectName,
			description: description,
			manager: manager,
			assignedTo: assignedTo,
			projectStatus: projectStatus,
			creationDate: creationDate ? creationDate : new Date().toLocaleString()
		};
		// Get the existing data
		let existing: any[] = [];
		existing = this.getProjects();

		// If no existing data, create an array
		// Otherwise, convert the localStorage string to an array
		existing = existing ? existing : [];

		// Add new data to localStorage Array
		existing!.push(newProject);

		// Save back to localStorage
		localStorage.setItem('projects', JSON.stringify(existing));
	}

	public projectDelete(projectName: string){
		let projects: any = [];
		projects = this.getProjects();
		const filtered = projects.filter((project: any) => project.projectName !== projectName);
		console.log("filtered" + JSON.stringify(filtered));
		localStorage.setItem('projects', JSON.stringify(filtered));
	}

	public getProjects(){
		var retrievedObject = localStorage.getItem('projects');
		return JSON.parse(retrievedObject!);
	}

	public getProject(){
		var retrievedObject = localStorage.getItem('editProject');
		return JSON.parse(retrievedObject!);
	}
}
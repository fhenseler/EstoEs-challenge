import { Injectable } from '@angular/core';
import { Project } from '../model/project';

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	constructor() { }

	public projectRegister(projectName: string, description: string, manager: string, assignedTo: string, projectStatus: string) {
		const newProject: Project = {
			projectName: projectName,
			description: description,
			manager: manager,
			assignedTo: assignedTo,
			projectStatus: projectStatus,
			creationDate: new Date().toLocaleString()
		};
		// Get the existing data
		let existing: any[] = [];
		existing = this.getProjects();
		// var existing: any = localStorage.getItem('projects');

		// If no existing data, create an array
		// Otherwise, convert the localStorage string to an array
		existing = existing ? existing : [];

		// Add new data to localStorage Array
		existing!.push(newProject);

		// Save back to localStorage
		localStorage.setItem('projects', JSON.stringify(existing));
		// localStorage.setItem('projects', existing);
	}

	public getProjects(){
		var retrievedObject = localStorage.getItem('projects');
		console.log('retrievedObject: ', retrievedObject);
		return JSON.parse(retrievedObject!);
	}
}
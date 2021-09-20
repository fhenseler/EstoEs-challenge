import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

	constructor() {}

  	public projectRegister(projectName: string, description: string, manager: string, assignedTo: string, projectStatus: string) {
	    const request: Object = {
	      projectName: projectName,
        description: description,
	      manager: manager,
        assignedTo: assignedTo,
        projectStatus: projectStatus
	    };

		  localStorage.setItem('request', JSON.stringify(request));

      var retrievedObject = localStorage.getItem('request');
      console.log('retrievedObject: ', JSON.parse(retrievedObject!));
	}
}
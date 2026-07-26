// loadProject.js

import { domController } from "./domController.js";
import { appController } from "./projectManager.js";

export function loadDefaultProject() {
	const currentProject = appController.getCurrentProject();
	const projectDiv = domController.renderProject(currentProject.id);

	return projectDiv;
}

export function renderProjectList() {
	const projectDiv = domController.renderProjectList();

	return projectDiv;
}
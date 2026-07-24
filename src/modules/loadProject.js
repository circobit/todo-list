// loadProject.js

import { domController } from "./domController.js";

export default function loadProject(id) {
	const projectDiv = domController.renderProject(id);

	return projectDiv;
}
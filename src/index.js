// index.js

import "./style.css";
import { createHeader, createContentWrapper, createFooter } from "./modules/initial-load.js";
import { appController } from "./modules/projectManager.js";
import loadProject from "./modules/loadProject.js";

// Get #content div
const contentDiv = document.getElementById("content");

// Append header to #content div
contentDiv.appendChild(createHeader());
// Append content wrapper to #content div
contentDiv.appendChild(createContentWrapper());
// Append footer to #content div
contentDiv.appendChild(createFooter());

// Init appController
appController;
// Load default project when loading the page for the first time
const main = document.getElementById("mainContent");
const currentProject = appController.getCurrentProject();
main.appendChild(loadProject(currentProject.id));